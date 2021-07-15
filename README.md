# powerlink-leads-crawler

## Requirements
- docker
- docker-compose
- node

## Init

```sh
npm install
cp .env.example .env
cd docker && docker-compose up -d
cd ..
node ./src/init_db.js
```

## Start Crawl
at first fill powerlink token, then
```sh
node ./src/parser.js
```

## Express Server
### Rest endpoint with crawled accounts

```sh
node ./src/index.js
```
