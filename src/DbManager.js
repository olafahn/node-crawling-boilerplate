// @flow
import mongoose from 'mongoose';
import HtmlResponse from './models/HtmlResponse';

class DbManager {
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
    if (!this.isDbConnected) throw url; // TODO better exception
    const html = new HtmlResponse();
    html.url = url;
    html.body = body;
    html.save();
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

module.exports = DbManager;
