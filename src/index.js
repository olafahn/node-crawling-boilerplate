// @flow
import DbManager from './DbManager';
import Fetcher from './Fetcher';

const dbManager = new DbManager('mongodb://localhost/mongodb_tutorial');

setTimeout(() => {
  console.log(dbManager.isDbConnected);
  Fetcher.fetch('http://naver.com').then(console.log, console.log);
}, 500);

setTimeout(() => {
  dbManager.close();
}, 1000);
