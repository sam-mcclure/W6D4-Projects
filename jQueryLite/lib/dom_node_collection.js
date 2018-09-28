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
        this.array[i].innerHTML += arg.outerHTML;
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].innerHTML += arg;
      }
    }
  }

  attr(att, val) {
    if (val) {
      for (let i = 0; i < this.array.length; i++){
        this.array[i].setAttribute(att,val);
      }
    } else {
      return this.array[0].getAttribute(att);
    }
  }

  addClass(newClass) {

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].class === undefined) {
        this.array[i].class = newClass;
      } else {
        let newClasses = newClass.split(' ');
        let currClasses = this.array[i].class.split(' ');

        currClasses = currClasses.concat(newClasses);
        this.array[i].class = currClasses.join(' ');
      }
    }
  }


  removeClass(oldClass) {
    if (!oldClass) {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i].class = "";
      }
    } else {
      for (let i = 0; i < this.array.length; i++) {
        let oldClasses = oldClass.split(' ');
        let currClasses = this.array[i].class.split(' ');

        for (let j = 0; j < currClasses.length; j++){
          if(oldClasses.includes(currClasses[j])) {
            currClasses[j] = '';
          }
        }
        this.array[i].class = currClasses.join(' ').trim();
      }
    }
  }

  children() {
    let childs = [];
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array[i].children.length; j++) {
        childs.push(this.array[i].children[j]);
      }
    }
    return new DOMNodeCollection(childs);
  }

  parent() {
    let parents = [];
    for (let i = 0; i < this.array.length; i++) {
      parents.push(this.array[i].parentElement);
    }
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    let results = [];
    for (let i = 0; i < this.array.length; i++) {
      let list = this.array[i].querySelectorAll(selector);
      for (let j = 0; j <list.length; j++) {
        results.push(list[j]);
      }
    }
    return new DOMNodeCollection(results);
  }

  remove() {
    this.empty();
    this.array = [];
  }
}



module.exports = DOMNodeCollection;
