let n = 123;
console.log(n);

//Convert n into string

let string = n.toString();
console.log(string);

//Split n into substrings stored in an array

let array = string.split("");
console.log(array);

//Reverse the elements in the array

let reverse = function () {
  let reverseArray = array.reverse();
  console.log(reverseArray);

  //Join the elements in reverseArray together
  let y = reverseArray.join("");
  console.log(y);

  //Convert string into integer
  let result = parseInt(y);
  console.log(result);
};

reverse(array);
