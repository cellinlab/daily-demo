function deleteDuplicates(head) {
  if (!head) return head;
  let cur = head;
  while (cur.next) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}