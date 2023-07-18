const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 3;

function search(nums, target) {
  function binarySearch(nums, target, start, end) {
    if (start > end) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      return binarySearch(nums, target, start, mid - 1);
    }

    if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, end);
    }
  }

  return binarySearch(nums, target, 0, nums.length - 1);
}

function search2(nums, target) {
  let mid = Math.floor(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
    if (nums[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  return -1;
}