const arr = [5, 1, 1, 2, 0, 0];

function quickSort(nums) {
  if (nums.length < 2) return nums;

  const mid = Math.floor(nums.length / 2);
  const pivot = nums[mid];

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === mid) continue;
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));