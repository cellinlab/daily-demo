function reverseBetween(head, left, right) {
  let pre = null;
  let cur = head;
  let leftHead = null;

  const dummy = new ListNode(0, head);

  let cursor = dummy;
  for (let i = 0; i < left - 1; i++) {
    cursor = cursor.next;
  }

  leftHead = cursor;

  let start = leftHead.next;
  pre = start;
  cur = pre.next;
  for (let i = left; i < right; i++) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  leftHead.next = pre;
  start.next = cur;

  return dummy.next;
}