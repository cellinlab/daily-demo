class WordDictionary {
  constructor() {
    this.words = {};
  }

  addWord(word) {
    const len = word.length;
    if (this.words[len]) {
      this.words[len].push(word);
    } else {
      this.words[len] = [word];
    }
  }

  search(word) {
    const len = word.length;
    if (!this.words[len]) {
      return false;
    }

    if (!word.includes('.')) {
      return this.words[len].includes(word);
    }

    const reg = new RegExp(word);
    return this.words[len].some((item) => {
      return reg.test(item);
    });
  }
}