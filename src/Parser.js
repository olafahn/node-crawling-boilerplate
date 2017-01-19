// @flow
import cheerio from 'cheerio';

class Parser {
  parseGithubPage(htmlBody: string): any {
    // console.log('parseGithubPage() called\n', htmlBody);
    const $ = cheerio.load(htmlBody);
    const popularRepoList = $('.mt-4 ol.pinned-repos-list.mb-4 li span span a');
    console.log('popularRepoList length', popularRepoList.length);
    popularRepoList.each((index: number, item: string) => {
      console.log(index + 1, $(item).text().trim());
    });
  }
}

module.exports = new Parser();
