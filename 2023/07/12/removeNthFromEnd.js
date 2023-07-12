function removeNthFromEnd(head, n) {
  // calculate the length of the list
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }

  // if the length of the list is equal to n, then remove the head
  if (len === n) {
    return head.next;
  }

  // otherwise, remove the node at len - n - 1
  cur = head;
  for (let i = 0; i < len - n - 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;

  return head;
}