const stars = function(s) {
  if (s === 0) {
    return "";
  }
  return "*" + stars(s-1);
};

const space = function(p) {
  if (p === 0) {
    return "";
  }
  return " " + space(p-1);
};
  
    
  const a = function (p, s, n) {
    if (n===0) {
      return "";
       }
    console.log(space(p)+ stars(s)) ; 
    a(p-1, s+2, n-1);
  }
;

const triangle = function(n) {
a(n-1, 1, n)
}
triangle(10);