// @flow

interface ParserInterface {
  parse(htmlBody: string): string,
}

export type Parser = ParserInterface; // eslint-disable-line flowtype/type-id-match
