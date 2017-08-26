const PageTree = require('./index.js');
const expect = require('chai').expect;

describe('PageTree', function() {
  let Page;
  let rootEl;
  let newEl;

  beforeEach(function() {
    rootEl = {
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

    Page = new PageTree(rootEl);
  });

  it('PageTree.add() should add an element node to a given nodes children array', function() {
    let rootId = Page._rootEl.id;
    let expected = [
      {
        id: 1,
        properties: { ...newEl },
        parent: { ...Page._rootEl },
        children: []
      },
      {
        id: 2,
        properties: { ...newEl },
        parent: { ...Page._rootEl },
        children: []
      }
    ];

    Page.add(newEl, rootId, Page.traversalBF);
    Page.add(newEl, rootId, Page.traversalBF);

    expect(Page._rootEl.children).to.deep.equal(expected);
  });
});
