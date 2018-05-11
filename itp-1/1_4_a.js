process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  var arry = input.split(' ').map(Number);

  var x = arry[0];
  var y = arry[1];

  var a = Math.floor(x / y);
  var b = x % y;
  var c = (x / y).toFixed(5)

  console.log(a + ' ' + b + ' ' + c);
})
