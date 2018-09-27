class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(string) {
    if (typeof string === 'string') {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].innerHTML = string;
      }
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

}

module.exports = DOMNodeCollection;
