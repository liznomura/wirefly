import PageTree from './index';
import createTree from './createTree';
import testArray from './arrayTree.json';
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

    Page = new PageTree({ root });
  });

  it('add() should add an element node to a given nodes children array', function() {
    let rootId = Page._root.data.id;
    let expected = [
      {
        data: {
          id: 1,
          properties: { ...newEl }
        },
        parent: { ...Page._root },
        children: []
      },
      {
        data: {
          id: 2,
          properties: { ...newEl }
        },
        parent: { ...Page._root },
        children: []
      }
    ];

    Page.add(newEl, rootId, Page.traversalBF);
    Page.add(newEl, rootId, Page.traversalBF);
    expect(Page._root.children).to.deep.equal(expected);
  });
});

describe('createTree', function() {
  let Page;
  let Tree;

  it('tree methods should still work after createTree made root', function() {
    Tree = createTree(testArray);
    let t = new PageTree({ tree: Tree });

    t.add(
      { type: 'div', attr: { height: '100px', width: '100px' } },
      0,
      t.traversalBF
    );
    expect(t._root.children[2]).to.deep.equal({
      data: {
        id: 5,
        properties: {
          type: 'div',
          attr: {
            height: '100px',
            width: '100px'
          }
        }
      },
      children: [],

      parent: t._root
    });
  });
});
