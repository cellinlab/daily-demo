function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }

  while (head) {
    if (head.flag) {
      return true;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return false;
}