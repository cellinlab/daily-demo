class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }

    current.isEnd = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char === '.') {
        for (const key in current.children) {
          if (this.dfs(current.children[key], word, i + 1)) {
            return true;
          }
        }
        return false;
      }
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEnd;
  }

  dfs(node, word, index) {
    if (index === word.length) {
      return node.isEnd;
    }

    const char = word[index];
    if (char === '.') {
      for (const key in node.children) {
        if (this.dfs(node.children[key], word, index + 1)) {
          return true;
        }
      }
      return false;
    }

    if (!node.children[char]) {
      return false;
    }

    return this.dfs(node.children[char], word, index + 1);
  }
}