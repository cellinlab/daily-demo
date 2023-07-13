function maxSlidingWindow(nums, k) {
  const res = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // when the current element is greater than the last element in the deque, pop the last element
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // push the current element into the deque
    deque.push(i);

    // if the first element in the deque is out of the window, shift it out
    if (deque[0] <= i - k) {
      deque.shift();
    }

    // if the window is full, push the first element in the deque into the result
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
}