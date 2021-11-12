//Reverse string fucnctino

function reverseString(str) {

  //convert input string into an array
  const stringArr= Array.from(str); // alternatively use str.split('')

  // calculate length of input string
  const stringLength = stringArr.length-1

  // initialize empty string for generating reverse string
  let reversedString = ''
 
  // push letters from string array into reversedString, starting from the end of string
  for (let i=0; i <= stringLength; i++) {
    //we can iterate in positive direction (0 up to stringLength), but still generate reversed string by pushing letters from the string array according to index = stringLength-i
    reversedString = reversedString + stringArr[stringLength-i]
  }

  return reversedString;
}

if (require.main === module) {

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;
