// @flow

interface ParserInterface {
  parse(htmlBody: string): any,
}

export type Parser = ParserInterface; // eslint-disable-line flowtype/type-id-match
