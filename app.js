const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  console.log(request.method, request.url);
  request.on('data', (chunck) => {
    body.push(chunck);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
  });

  response.setHeader('Content-Type', 'text/html');
  response.write(
    '<form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>'
  );
  response.end();
});

server.listen(3000);

/*


*/
