const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Stef', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote in file');
  }
});

/*

and I saw one it s main fucntionality
are available globaly and
in node js you need to tell me what u need and now let s move 

*/
