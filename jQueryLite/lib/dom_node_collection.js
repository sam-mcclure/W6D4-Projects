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
      console.log('yo');
      for (let i = 0; i < this.array.length; i++) {
        console.log(arg.array.length);
        for (let j = 0; j < arg.array.length; j++) {
          console.log("hi");
          this.array[i].innerHTML += arg.array[j].outerHTML ;
        }
      }
    }
  }

}

module.exports = DOMNodeCollection;

// el = document.getElementById("list1"); li = $l(el); ul = $l('ul'); ul.append(li);
