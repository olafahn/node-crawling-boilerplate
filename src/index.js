// @flow
import DbAdapter from './DbAdapter';
import Fetcher from './Fetcher';
import GithubPageParser from './parsers/GithubPageParser';

const dbAdapter = DbAdapter.getInstance('mongodb://localhost/mongodb_tutorial');

setTimeout(() => {
  console.log(dbAdapter.isDbConnected);
  Fetcher.fetch('https://github.com/olafahn').then((res: string) => {
    GithubPageParser.parse(res);
  }, console.log);
}, 500);

setTimeout(() => {
  dbAdapter.close();
}, 1500);
