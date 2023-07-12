function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // move fast n nodes ahead of slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // move slow and fast together until fast reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
}
