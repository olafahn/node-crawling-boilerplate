// @flow
import DbAdapter from './DbAdapter';
import Fetcher from './Fetcher';
import Parser from './Parser';

const dbAdapter = new DbAdapter('mongodb://localhost/mongodb_tutorial');

setTimeout(() => {
  console.log(dbAdapter.isDbConnected);
  Fetcher.fetch('https://github.com/olafahn').then((res: string) => {
    Parser.parseGithubPage(res);
  }, console.log);
}, 500);

setTimeout(() => {
  dbAdapter.close();
}, 1000);
