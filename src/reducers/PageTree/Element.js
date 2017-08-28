export default class Element {
  constructor(id, props) {
    this.data = {
      id,
      properties: props
    }
    this.parent = null;
    this.children = [];
  }
}
