// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
const ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let legal = ages.filter( age => (age <= 49 && age >= 18));
console.log(legal);



// 2) Choose a loop method of your choice to get this result from this array:
// expected result:
// `[3, 5, 7, 9, 11, 13]`
let nums = [1, 2, 3, 4, "5", 6, "7"];
for (let i = 0; i < nums.length - 1; i++) {
  let sumNums = Number(nums[i]) + Number(nums[i+1]);
  console.log(sumNums);
};





// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];
yoda_quote[0] = yoda_quote[0].charAt(0).toUpperCase() + yoda_quote[0].substring(1);
yoda_quote[2] = yoda_quote[2] + ",";
let yodaArray = yoda_quote.join(" ");
console.log(`"Yoda says, "${yodaArray}"`);

// 4)  * Sort the following numbers in descending order
//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

let greater19 = integers.filter(number => number > 19);
console.log(greater19)
greater19 = greater19.map(function(element) {
  return (element * 1.5 -1)})
console.log(greater19);
greater19 = greater19.reduce((a,b) => a+b);
console.log(greater19);