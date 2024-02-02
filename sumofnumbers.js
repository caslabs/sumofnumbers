const testNums = [1, 2, 3, 4, 5];
console.log(testNums);

function sumFor(nums) {
  let runningSum = 0;
  for (const num of nums) {
    runningSum += num;
  }
  return runningSum;
}

console.log('sumFor', sumFor(testNums));

function sumWhile(nums) {
  let runningSum = 0;
  let indx = 0;
  while (indx < nums.length) {
    runningSum += nums[indx];
    indx++;
  }
  return runningSum;
}

console.log('sumWhile', sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1));
}

console.log('sumRecursion', sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num, 0);
}

// assuming we execute this via index.html, underscore is executed.
// Per the instructions, we don't define it here
console.log('sumTheSimpleWay', sumTheSimpleWay(testNums));
