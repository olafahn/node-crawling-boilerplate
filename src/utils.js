// @flow

import fs from 'fs';

export const randomString = (): string => Math.random().toString(36).substring(7);
export const isFileExists = (filePath: string): boolean => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};
