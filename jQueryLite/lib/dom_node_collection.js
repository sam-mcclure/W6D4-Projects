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

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < arg.array.length; j++) {
          this.array[i].innerHTML += arg.array[j].outerHTML ;
        }
      }
    } else if (arg instanceof HTMLElement){
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].innerHTML += arg.outerHTML ;
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].innerHTML += arg;
      }
    }
  }

}

module.exports = DOMNodeCollection;

// el = document.getElementById("list1"); li = $l(el); ul = $l('ul'); ul.append(li);
