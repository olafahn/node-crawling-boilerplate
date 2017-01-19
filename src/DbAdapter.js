// @flow
import mongoose from 'mongoose';
import HtmlResponse from './models/HtmlResponse';

const dbAdapterInstances = {};
class DbAdapter {
  static getInstance(uri: string): DbAdapter {
    if (dbAdapterInstances[uri] === undefined) {
      const dbAdapter = new DbAdapter(uri);
      dbAdapterInstances[uri] = dbAdapter;
      return dbAdapter;
    }
    return dbAdapterInstances[uri];
  }
  constructor(mongoDbUri: string) {
    console.log('DbManager initialize started');
    // init
    this.db = mongoose.connection;
    this.isDbConnected = false;
    this.db.once('open', () => {
      this.isDbConnected = true;
      console.log('DbManager db connected!');
    });
    // mongoose.connect('mongodb://localhost/mongodb_tutorial');
    mongoose.connect(mongoDbUri);
    console.log('DbManager initialized successfully!');
    // bindings
    this.saveHtmlResponse = this.saveHtmlResponse.bind(this);
    this.getHtmlResponses = this.getHtmlResponses.bind(this);
    this.close = this.close.bind(this);
  }


  // types
  db: any;
  saveHtmlResponse: (url: string, body: string) => void;
  isDbConnected: boolean;
  getHtmlResponses: () => Promise<*>;
  close: () => void;


  // implementations
  saveHtmlResponse(url: string, body: string) {
    console.log('saveHtmlResponse', url);
    if (!this.isDbConnected) throw url; // TODO better exception
    const html = new HtmlResponse();
    html.url = url;
    html.body = body;
    html.save();
    console.log('saved!', url);
  }
  getHtmlResponses(): Promise<*> {
    if (!this.isDbConnected) throw 1; // eslint-disable-line
    // TODO better exception
    const p = new Promise((resolve: Function, reject: Function) => {
      HtmlResponse.find((err: any, res: any) => {
        if (err) {
          console.error('error', err);
          reject(Error(err));
        } else {
          resolve(res);
        }
      });
    });
    return p;
  }
  close() {
    if (this.isDbConnected) this.db.close();
  }
}

export default DbAdapter;
