import Queue from './Queue';
import Element from './Element';

export default class PageTree {
  constructor({ root, tree }) {
    if (root) {
      this.nextId = 0;
      this._root = new Element(this.generateId(), root);
    } else {
      this.nextId = tree.nextId;
      this._root = tree._root;
    }
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

  modify(elProps, toElId, traversal) {
    let el = null,
      callback = function(element) {
        if (element.data.id == toElId) {
          el = element;
          return true;
        }
      };

    this.contains(callback, traversal);

    if (el) {
      el.data.properties.attr = elProps;
    } else {
      throw new Error('Cannot modify a non-existent node');
    }
  }

  add(elProps, toElId, traversal) {
    let id,
      child,
      parent = null,
      callback = function(element) {
        if (element.data.id == toElId) {
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

  remove(elId, traversal) {
    let parent,
      index,
      removedChild = null;
    let callback = function(element) {
      if (element.data.id == elId) {
        parent = element.parent;
        return true;
      }
    };

    this.contains(callback, traversal);

    if (parent) {
      index = parent.children.findIndex(child => child.data.id == elId);

      if (index >= 0) {
        removedChild = parent.children.splice(index, 1);
      } else {
        throw new Error('Node to remove does not exist');
      }
    } else {
      throw new Error('Parent node does not exist');
    }
  }
}
