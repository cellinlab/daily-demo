class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ? l1 : l2;

  return dummy.next;
}