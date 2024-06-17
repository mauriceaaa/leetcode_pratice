var addTwoNumbers = function(l1, l2) {
    let a  = 10;
    let b = 1;
    let sum  = 0;
    let l3  = [];

    for (let i = (l1.length-1); i>=0;  i--){
       sum = sum + b*l1[i];
       b = b*10;
    }
        b = 1 ;
    for (let i = (l2.length-1); i>=0;  i--){
        sum = sum + b*l2[i];
        b = b*10;
     }
    /**
      * 個位數
      */
     l3.push(sum % a);
     sum = sum - (sum % a);
    /**
      * 十位數以上
      */
    while((sum/a)>1){
        console.log(a);
        l3.push(parseInt((sum % (a*10))/a)); 
        a = a*10  
    }
    console.log(l3);
    return l3;
   
};

addTwoNumbers([2,4,3],[5,6,4])