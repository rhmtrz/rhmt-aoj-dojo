process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {

  const sec = parseInt(input);
  const hour = parseInt(sec / 3600);
  const minute = parseInt(sec / 60 % 60);
  const second = parseInt(sec % 60)

  output = hour + ':' + minute + ':' + second;
  console.log(output)
})
