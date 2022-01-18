<h1 align="center">URL Shortener</h1>

<p align="center">
  <a href="#About">About</a> &#xa0; | &#xa0; 
  <a href="#Features">Features</a> &#xa0; | &#xa0;
  <a href="#Technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#Documentation">Documentation</a> &#xa0; | &#xa0;
  <a href="#Requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#Tests">Tests</a>
</p>

## About ##

API that shortens an url and save to the database.\
This project is a part of a Mobile Development specialization course by Unyleya about NodeJS APIs made by Gian Carlo Mantuan Dala Rosa (me)

## Features ##

✔️ Shorten an URL;\
✔️ Retrieve a shortened URL by its Identifier on the database;\
✔️ Retrieve a list of shortened URLs given a date.

## Technologies ##

This project uses:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)


## Documentation ##
This project uses Swagger for its documentation. You can check the file `swagger.yaml` or access via `/api-docs` endpoint on the browser.

## Requirements ##

First you need NodeJS installed in your machine.
```bash
# Yarn
yarn install # To install the dependencies
yarn run dev # To run the porject

# NPM
npm install # To install the dependencies
npm run dev # To run the porject

```

## Tests ##
You can run the command `yarn test` to run all of the api tests
