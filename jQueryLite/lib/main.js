const DOMNodeCollection = require('./dom_node_collection.js');

$l = function l (arg) {

  if (arg instanceof HTMLElement) {
    let array = [arg];
    return new DOMNodeCollection(array);
  } else
  if (typeof arg === "string") {
    let array = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(array);
  }

};
