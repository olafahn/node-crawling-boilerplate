// @flow
import DbAdapter from './DbAdapter';
import Fetcher from './Fetcher';

const dbAdapter = new DbAdapter('mongodb://localhost/mongodb_tutorial');

setTimeout(() => {
  console.log(dbAdapter.isDbConnected);
  Fetcher.fetch('https://github.com/olafahn').then(console.log, console.log);
}, 500);

setTimeout(() => {
  dbAdapter.close();
}, 1000);
