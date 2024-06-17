var lengthOfLongestSubstring = function (s) {
    let array1 = s.split("");
    let resultArray = [];
    let temp = [];
    let result = 0;
    const set = new Set();
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array1[i + 1]) {
        resultArray.push(array1[i]);
  
        if (resultArray.length > result) {
          result = resultArray.length;
        }
  
        resultArray = [];
      } else if (resultArray.includes(array1[i + 1])) {
        resultArray.push(array1[i]);
  
        if (resultArray.length > result) {
          result = resultArray.length;
        }
  
        temp = resultArray;
        let index = temp.indexOf(array1[i + 1]);
        resultArray = [];
        for (let a = index + 1; a < temp.length; a++) {
          resultArray.push(temp[a]);
        }
      } else {
        resultArray.push(array1[i]);
      }
    }
  
    if (resultArray.length > result) {
      result = resultArray.length;
    }
  
    return result;
  };