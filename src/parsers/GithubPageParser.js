// @flow
import cheerio from 'cheerio';
import type { Parser } from '../Parser';

class GithubPageParser {
  parse(htmlBody: string): any {
    // console.log('parseGithubPage() called\n', htmlBody);
    const $ = cheerio.load(htmlBody);
    const popularRepoList = $('.mt-4 ol.pinned-repos-list.mb-4 li span span a');
    console.log('popularRepoList length', popularRepoList.length);
    popularRepoList.each((index: number, item: string) => {
      console.log(index + 1, $(item).text().trim());
    });
  }
}

// checking the github page parser type is compatible with parser type
const p: Parser = new GithubPageParser();
export default p;
