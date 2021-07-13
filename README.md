# powerlink-leads-crowler

## Requirements
- docker
- docker-compose
- node

## Init

```sh
docker-compose up -d
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
