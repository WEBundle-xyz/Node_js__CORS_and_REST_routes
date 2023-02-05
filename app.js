const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  console.log(request.method, request.url);
  request.on('data', (chunck) => {
    body.push(chunck);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    let userName = 'No user';
    if (body) {
      userName = body.split('=')[1];
    }
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);

/* 

*/
