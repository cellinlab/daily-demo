const { demoTree } = require("./tree")

// post-order
function postorder(root) {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.value)
}

postorder(demoTree);
// D
// E
// B
// F
// C
// A
