var kthSmallest = function (root, k) {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return res[k - 1];
};

var kthSmallestPro = function (root, k) {
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    k--;
    if (k === 0) return node.val;
    node = node.right;
  }

  return -1;
};