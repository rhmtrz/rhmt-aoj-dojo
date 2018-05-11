process.stdin.setEncoding('utf-8');
process.stdin.on('data', () => {
  for (var i = 0; i < 100; i++) {
    var text = 'Hello World';
    console.log(text);
  }
})
