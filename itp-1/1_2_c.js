process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {

  var num = input.split(' ');

  var a = parseInt(num[0]);
  var b = parseInt(num[1]);
  var c = parseInt(num[2]);

  var d = [a, b, c];
  var e = d.sort();
  var result = Number(e)
  console.log(result);
  console.log(e[0] + ' ' + e[1] + ' ' + e[2]);
})
