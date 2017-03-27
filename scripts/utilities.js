function forEach(array, handler) {
  for (var i = 0; i < array.length; i++) {
    handler(array[i], i);
  }
}

Number.prototype.pad = function (num) {
  var string = this.toString(),
      i;
  for (i = 0; i < (num - this.toString().length); i++) {
    string = "0" + string;
  }
  return string;
}