const nums = [-1, 0, 1, 2, -1, -4];

function threesum(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    // skip same nums[i]
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      // when sum is less than 0, move j to right
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // skip same nums[j]
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // when sum is greater than 0, move k to left
        k--;
        // skip same nums[k]
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // when sum is equal to 0, push to result
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        // skip same nums[j] and nums[k]
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return result;
}

console.log(threesum(nums));