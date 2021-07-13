# powerlink-leads-crawler

## Requirements
- docker
- docker-compose
- node

## Init

```sh
npm install
cd docker && docker-compose up -d
cd ..
node ./init_db.js
```

## Start Crawl

```shell
node ./parser.js
```

## Express Server
### Rest endpoint with crawled accounts

```shell
node ./index.js
```
