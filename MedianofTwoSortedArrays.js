var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = [];
    let target1 = 0;
    let target2 = 0;
  
    nums3 = nums1.concat(nums2);
  
    nums3.sort(function (a, b) {
      return a - b;
    });
  
    if (nums3.length === 0) {
      return;
    }
  
    if (nums3.length === 1) {
      return nums3[0];
    }
  
    if (nums3.length % 2 === 0) {
      target1 = nums3[(nums3.length + 1) / 2 - 1.5];
      target2 = nums3[(nums3.length + 1) / 2 - 0.5];
  
      return (target1 + target2) / 2;
    } else {
      target1 = nums3[(nums3.length + 1) / 2 - 1];
      return target1;
    }
  };