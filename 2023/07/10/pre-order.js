const { demoTree } = require("./tree")

// pre-order
function preorder(root) {
  if (!root) return
  console.log(root.value)
  preorder(root.left)
  preorder(root.right)
}

preorder(demoTree);
// A
// B
// D
// E
// C
// F