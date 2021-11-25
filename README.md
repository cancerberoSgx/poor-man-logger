# poor-man-logger

Sometimes it's very hard or impossible to debug by logging messages, for example, react-native app ios device. 

This is a small server that listen for logging messages by POST requests. 

## Usage

npm i -g logger-server


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