function detectCycle(head) {
  if (!head || !head.next) {
    return null;
  }

  while (head) {
    if (head.flag) {
      return head;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
}