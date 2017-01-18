// @flow

import fs from 'fs';

module.exports = {
  randomString(): string {
    return Math.random().toString(36).substring(7);
  },
  isFileExists(filePath: string): boolean {
    try {
      return fs.statSync(filePath).isFile();
    } catch (err) {
      return false;
    }
  },
};
