process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  var arry = input.split(' ').map(Number);
  var a = arry[0]
  var b = arry[1]
  var c = arry[2]

  var result = 0;
  for (var i = a; i <= b; i++) {
    if (c % i == 0)
      result++
  }

  console.log(result);
})
