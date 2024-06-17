var removeDuplicates = function (nums) {
    let a = nums.length - 1;
    while (a >= 0) {
      if (nums[a] === nums[a - 1] && nums[a] === nums[a - 2]) {
        nums.splice(a, 1);
      }
      a--;
    }
  };