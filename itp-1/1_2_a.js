process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  [num1, num2] = input.split(' ')
  a = parseInt(num1);
  b = parseInt(num2);
  if (a < b) {
    console.log('a < b');
  } else if (a > b) {
    console.log('a > b');
  } else {
    console.log('a == b');
  }
});
