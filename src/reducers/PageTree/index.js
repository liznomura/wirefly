import Queue from './Queue';
import Element from './Element';

export default class PageTree {
  constructor(root) {
    this.nextId = 0;
    this._root = new Element(this.generateId(), root);
  }

  generateId() {
    return this.nextId++;
  }

  traversalBF(callback) {
    let queue = new Queue();

    queue.enqueue(this._root);

    let currentTree = queue.dequeue();

    while (currentTree) {
      for (let i = 0, length = currentTree.children.length; i < length; i++) {
        queue.enqueue(currentTree.children[i]);
      }

      if (callback(currentTree)) {
        return;
      }

      currentTree = queue.dequeue();
    }
  }

  contains(callback, traversal) {
    traversal.call(this, callback);
  }

  add(elProps, toElId, traversal) {
    let id,
      child,
      parent = null,
      callback = function(element) {
        if (element.id === toElId) {
          parent = element;
          return true;
        }
      };

    this.contains(callback, traversal);

    if (parent) {
      id = this.generateId();
      child = new Element(id, elProps);
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
}
