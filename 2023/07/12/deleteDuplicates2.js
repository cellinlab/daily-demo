function deleteDuplicates(head) {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy;
  let cur = head;

  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }
    cur = cur.next;
  }

  return dummy.next;
}