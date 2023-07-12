const { demoTree } = require("./tree")

// mid-order
function midorder(root) {
  if (!root) return
  midorder(root.left)
  console.log(root.value)
  midorder(root.right)
}

midorder(demoTree);
// D
// B
// E
// A
// C
// F