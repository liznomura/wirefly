export default class Element {
  constructor(id, props) {
    this.id = id;
    this.properties = props;
    this.parent = null;
    this.children = [];
  }
}
