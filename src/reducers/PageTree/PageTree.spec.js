import PageTree from './index';
import { expect } from 'chai';

describe('PageTree', function() {
  let Page;
  let root;
  let newEl;

  beforeEach(function() {
    root = {
      type: 'div',
      attr: {
        height: '100px',
        width: '100px',
        border: '1px solid black'
      }
    };

    newEl = {
      type: 'div',
      attr: {}
    };

    Page = new PageTree(root);
  });

  it('add() should add an element node to a given nodes children array', function() {
    let rootId = Page._root.id;
    let expected = [
      {
        id: 1,
        properties: { ...newEl },
        parent: { ...Page._root },
        children: []
      },
      {
        id: 2,
        properties: { ...newEl },
        parent: { ...Page._root },
        children: []
      }
    ];

    Page.add(newEl, rootId, Page.traversalBF);
    Page.add(newEl, rootId, Page.traversalBF);
    expect(Page._root.children).to.deep.equal(expected);
  });

});
