#!/usr/bin/env node
const { appendFile } = require('fs');
var http = require('http');
var url = require('url');
var args = require('minimist')(process.argv.slice(2));

if(args.help) {
  console.log(`
Usage: 

poor-man-logger --port 8080 --output log.txt

Options: 

  --port
  --output
  --help

Example client (see README for more):

curl -d "hello world" -H "Content-Type: application/json" -X POST http://localhost:8888/log

  `.trim());
  process.exit(0)
}
var httpServer = http.createServer(function (req, resp) {
  var reqUrlString = req.url;
  var pathName = url.parse(reqUrlString, true, false).pathname;
  if ('/log' == pathName && req.method === 'POST') {
    var postData = '';
    req.on('data', function (chunk) {
      postData += chunk;
    });
    req.on('end', function () {
      const s = "LOG: " + postData
      console.log(s);
      if (args.output) {
        appendFile(args.output, s + '\n')
      }
      resp.end()
    })
  } else {
    console.error(`Invalid request ${req.method} ${pathName}`);
  }
});
const port = args.port || 8888
httpServer.listen(port);
console.log(`Server is started. You can log by POST http://localhost:${port}/log`);
