process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  var whrxy = input.split(' ').map(Number);
  const w = parseInt(whrxy[0]);
  const h = parseInt(whrxy[1]);
  const x = parseInt(whrxy[2]);
  const y = parseInt(whrxy[3]);
  const r = parseInt(whrxy[4]);

  if (w < x+r || h < y+r || x < 0 || y < 0) {
    console.log('No');
  } else {
    console.log('Yes');
  }
})
