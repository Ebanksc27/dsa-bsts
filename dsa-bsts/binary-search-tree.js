class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, node = this.root) {
    if (node === null) {
      if (this.root === null) this.root = new Node(val);
      return new Node(val);
    }
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      node.right = this.insertRecursively(val, node.right);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;
    while (current !== null) {
      if (val === current.val) return current;
      current = val < current.val ? current.left : current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, node = this.root) {
    if (node === null) return undefined;
    if (val === node.val) return node;
    return val < node.val ? this.findRecursively(val, node.left) : this.findRecursively(val, node.right);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left !== null) traverse(node.left);
      visited.push(node.val);
      if (node.right !== null) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  // Placeholder for further study methods
  dfsPreOrder() { /* Implementation */ }
  dfsPostOrder() { /* Implementation */ }
  bfs() { /* Implementation */ }
  remove(val) { /* Implementation */ }
  isBalanced() { /* Implementation */ }
  findSecondHighest() { /* Implementation */ }
}

module.exports = BinarySearchTree;
