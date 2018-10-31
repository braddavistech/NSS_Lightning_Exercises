const print = (a,b) => console.log(a + b);

const calculate = (a, b, c) => c(a, b);

calculate( 2, 3, print);