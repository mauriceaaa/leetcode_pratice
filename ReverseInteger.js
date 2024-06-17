var reverse = function (x) {
    if (x === 0) {
      return 0;
    }
  
    let reverse = Math.abs(x).toString().split("").reverse().join("");
  
    let pow = Math.pow(2, 31) - 1;
  
    if (reverse > pow || reverse < -pow) {
      return 0;
    }
  
    if (x < 0) {
      return -reverse;
    } else {
      return reverse;
    }
  };