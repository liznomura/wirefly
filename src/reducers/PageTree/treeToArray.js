import Queue from './Queue';

export default function treeToArray(tree) {
  if (!tree instanceof PageTree) {
    throw new Error('Must be instance of PageTree');
  }

  const arr = [];

  (function recurse(currentNode, parentId) {
      for (var i = 0, length = currentNode.children.length; i < length; i++) {
          recurse(currentNode.children[i], currentNode.data.id);
      }

    let newNode = {
      id: currentNode.data.id,
      parentId: parentId,
      properties: currentNode.data.properties
    }
      arr.push(newNode)

  })(tree._root, null);

  return arr;
}
