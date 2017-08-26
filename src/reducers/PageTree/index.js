const Queue = require('./Queue');
const Element = require('./Element');

function PageTree(rootEl) {
  this.nextId = 0;
  const el = new Element(this.generateId(), rootEl)
  this._rootEl = el;
}

PageTree.prototype.generateId = function() { return this.nextId++; };

PageTree.prototype.traversalBF = function(callback) {
    let queue = new Queue();

    queue.enqueue(this._rootEl);

    let currentTree = queue.dequeue();

    while(currentTree){
        for (let i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

PageTree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

PageTree.prototype.add = function(elProps, toElId, traversal) {
    let id = this.generateId();
    let child = new Element(id, elProps),
        parent = null,
        callback = function(element) {
            if (element.id === toElId) {
                parent = element;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

module.exports = PageTree;