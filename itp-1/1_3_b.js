process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {

  var arr = input.split('\n')

  for (var i = 0; i < arr.length && arr[i] != 0; i++) {
    var result = 'Case ' + (i + 1 )+ ': ' + arr[i];
    console.log(result);
  }
})
