//Create array to track factors
var factors = [];

function primeFactorization(n) {
    //If n is divisible by 2, add 2 to factors and call primeFactorization with n/2
    if(n%2===0) {
        factors.push(2);
        primeFactorization(n/2)
    }
    //For 3 to the square root of n, add i to factors while n is divisible by i and divide n by i
    for(var i=3;i<Math.sqrt(n);i+=2) {
        while(n%i===0) {
            factors.push(i);
            n = n/i;
        }
    }
    //If n is no longer divisible by 2, add n to factors and return
    if(n%2!==0) {
        factors.push(n);
        return;
    }
}

function largestPrimeFactor(n) {
    //Call primeFactorization for n
    primeFactorization(n);
    //If there are factors, return the last factor in the array, which would be the largest factor
    //Else n has no prime factors
    if(factors.length > 0) {
        return "The largest prime factor of " + n + " is " + factors[factors.length-1];
    }
    else {
        return n + " has no prime factors."
    }
}

console.log(largestPrimeFactor(600851475143));