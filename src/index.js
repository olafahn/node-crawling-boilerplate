// @flow
import DbManager from './DbManager';
import Fetcher from './Fetcher';

setTimeout(() => {
  console.log(DbManager.isDbConnected);
  Fetcher.fetch('http://naver.com').then(console.log, console.log);
}, 500);

setTimeout(() => {
  DbManager.close();
}, 1000);
