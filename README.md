# Node Crawling Bolierplate

> Powered by eslint, babel, flowtype, mongodb, mongoose, request *(request-promise-native)*

## How to Install

```shell
npm install -g babel
git clone git@github.com:olafahn/node-crawling-bolierplate.git --width=1
cd node-crawling-boilerplate
npm install
```

## How to Run

### Watch command

```shell
cd /path/to/this/boilerplate
npm run babel
```

Watch command will make javascript codes runnable in normal node even if the code uses ES6 or flowtype by using Babel transpiler. This script will watch the file diff under `src` dir, then transpile sources into `build` dir.

### Execution command

```shell
cd /path/to/this/boilerplate
npm start
```

- `cd /path/to/this/boilerplate` just indicates that command below itself should be executed in this project's directory.

- Run **Execution command** in seprated terminal session. (Not in the **Watch command** terminal session)


---

# Changelog

## 18 Jan 2017 6:09 PM

- Init project

