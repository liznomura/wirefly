import PageTree from '../reducers/PageTree';
//nodes in tree taken from db do not have a parent
//this function creates a tree with parent pointers
export default function createTree(arrayItems) {
  const lookup = {};
  const rootItems = {};

  for(const item of arrayItems) {
    const itemId = item.id;
    const parentId = item.parentId;

    if(!lookup.hasOwnProperty(itemId)) {
      lookup[itemId] = { data: null, children: [] }
    }

    lookup[itemId].data = item;
    const TreeItem = lookup[itemId];

    if(parentId === null) {
      rootItems._root = TreeItem;
    }

    if(!lookup.hasOwnProperty(parentId)) {
      lookup[parentId] = { data: null, children: [] };
    }

    TreeItem.parent = lookup[parentId];

    lookup[parentId].children.push(TreeItem);
  }

  return rootItems;
};
