export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue = function(item) {
    this.queue.push(item);
  }

  dequeue = function() {
    return this.queue.shift();
  }
}
