var isPalindrome = function (x) {
    let answer = true;
    let array1 = x.toString().split("");
    let lengthHalf = 0;
  
    if (array1.length % 2 === 0) {
      lengthHalf = array1.length / 2 - 1;
      for (let i = 0; i <= lengthHalf; i++) {
        array1[i] == array1[array1.length - 1 - i]
          ? (answer = true)
          : (answer = false);
  
        if (answer === false) return answer;
      }
    } else {
      lengthHalf = array1.length / 2 - 0.5;
      for (let i = 0; i < lengthHalf; i++) {
        array1[i] == array1[array1.length - 1 - i]
          ? (answer = true)
          : (answer = false);
        if (answer === false) return answer;
      }
    }
  
    return answer;
  };