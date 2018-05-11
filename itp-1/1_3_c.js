process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  var arry = input.split(' ');
  var a = parseInt(arry[0]);
  var b = parseInt(arry[1]);
  if (a == b && a == 0) {
    process.exit();
  } else if (a > b){
    console.log(b + ' ' + a);
  } else {
    console.log(a+ ' ' + b);
  }
})
