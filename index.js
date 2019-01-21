const nums = [24, 33, 51, 46, 18, 4, 83];
const nums2 = [68, 37, 19, 90];
const fruits = ['Banana', 'Apple', 'Orange'];

let val;

// Check if is array
// val = Array.isArray(nums);

// Find index of value
// val = nums.indexOf(18)

// MUTATING ARRAYS
// Add on to end
// nums.push(260)

// Add on to front
// nums.unshift(11)

// Take off from end
// nums.pop()

// Take off from front
// nums.shift()

// Splice values
// nums.splice(1, 3)

// Reverse
// nums.reverse()

// Concatenate arrays
// val = nums.concat(nums2)

// Sorting arrays
// val = fruits.sort()
// val = nums.sort()

// Use the "compare function"
// val = nums.sort(function(a, b) { return a - b })

// Revese sort
// val = nums.sort(function(a, b) { return b - a })

// Find
function under50(num) {
  return num < 50;
}

val = nums.find(under50);

function over50(num) {
  return num > 50;
}

val = nums.find(over50);

console.log(nums);
console.log(val);
