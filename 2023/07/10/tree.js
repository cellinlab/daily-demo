class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.right = nodeF;


module.exports = {
  demoTree: root,
  TreeNode,
};
