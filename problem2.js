var x = 1;
var y = 2;
var z = 0;
var nums = [1,2];
var sum = 0;

function fib(x,y) {
    var z = y;
    y += x;
    x = z;
    return y;
}

for(y;y<=4000000;) {
    z = y;
    y = fib(x,y);
    x = z;
    if(y%2===0) {
        nums.push(y);
    }
}

console.log(nums);

for(var i=1;i<nums.length;i++) {
    sum += nums[i];
}

console.log(sum);