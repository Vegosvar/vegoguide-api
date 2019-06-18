# Vegoguide API

## Requirements

* Mongodb 4
* Node 10+

## Install

```shell
$ git clone https://github.com/Vegosvar/vegoguide-api
$ cd vegoguide-api
$ npm install
$ cp config.sample.mjs config.mjs
```

Edit `config.mjs` with a text editor and configure the properties

## Genererate sample data

Run the command:

```shell
npm run generate
```

When the `Done` text is shown and the program has exited the database has been populated with sample data.

If an error occurred the error will be shown before the process exits.

## Start development server

```shell
npm start
```

## Start production server

TODO
