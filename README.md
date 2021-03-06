# poor-man-logger

Sometimes it's very hard or impossible to debug by logging messages, for example, react-native app ios device. 

This is a small server that listen for logging messages by POST requests. 

## Usage

```
npm i -g https://github.com/cancerberoSgx/poor-man-logger
poor-man-logger
# more options
poor-man-logger --port 8080 --output log.txt
poor-man-logger --help
```

TIP: you can use https://www.npmjs.com/package/localtunnel to access different networks. 

## Client examples

React native 

```ts
fetch('http://localhost:8888/log', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: 'hello world'
});
```

Curl

```
curl -d "hello world" -H "Content-Type: application/json" -X POST http://localhost:8888/log
```