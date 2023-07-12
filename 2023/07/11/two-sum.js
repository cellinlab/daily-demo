const nums = [2, 7, 11, 15];
const target = 9;

function findTwoSum(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 + num2 === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

function findTwoSumPro(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}

console.log(findTwoSum(nums, target));