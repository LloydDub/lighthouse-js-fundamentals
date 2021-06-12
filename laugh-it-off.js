function laugh(num) {
  var msg = "";
  var h = "ha";
  var p = "!"
  while (num > 0) {
     msg += h;
    num--;

  }
return msg + p;
}
console.log(laugh(3))