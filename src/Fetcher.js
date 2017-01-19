// @flow
// import sha1 from 'sha1';

// import { isFileExists } from './utils';
import rp from 'request-promise-native';
import HtmlResponse from './models/HtmlResponse';
import DbAdapter from './DbAdapter';

class Fetcher {
  fetch(url: string): Promise<*> {
    console.log('fetch', url);
    const p = new Promise((resolve: Function, reject: Function) => {
      HtmlResponse.findOne({ url }, (err: any, htmlResponse: any) => {
        console.log('htmlResponse', htmlResponse);

        if (err) {
          console.log('err', err);
          reject(err);
        } else if (!htmlResponse || !htmlResponse.body) {
          // it means not cached!
          rp(url)
          .then((body: string) => {
            console.log(`fetched! ${url}`);
            // console.log('response', body);
            // TODO caching
            const dbAdapter = DbAdapter.getInstance('mongodb://localhost/mongodb_tutorial');
            dbAdapter.saveHtmlResponse(url, body);
            resolve(body);
          }, (...a: any) => {
            console.log('err3', a);
            reject(...a);
          });
        } else {
          // cache hitda hit
          console.log(`cache hit! ${url}`);
          console.log('resolve', htmlResponse.body);
          resolve(htmlResponse.body);
        }
      });
    });
    return p;
  }
}

export default new Fetcher();
