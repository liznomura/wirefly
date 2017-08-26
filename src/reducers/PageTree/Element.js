function Element(id, props) {
  this.id = id;
  this.properties = props;
  this.parent = null;
  this.children = [];
}

module.exports = Element;