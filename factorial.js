const factorial = function(d) 
{ if (d===1) {
return 1;}
const b = d * factorial(d-1);
return b;
};
console.log(factorial(5));