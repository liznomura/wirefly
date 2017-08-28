import arrayTree from '../reducers/PageTree/arrayTree.json';
import createTree from './createTree';

describe('createTree', function() {
  it('should convert array of data into tree', function() {
    // let expected = {
    //   nextId: 3,
    //   _root: {
    //     id: 0,
    //     parent: null,
    //     properties: {
    //       type: 'div',
    //       attr: {
    //         height: '100px',
    //         width: '100px',
    //         border: '1px solid black'
    //       }
    //     },
    //     children: [
    //       {
    //         id: 1,
    //         parent: this._root,
    //         properties: {
    //           type: 'div',
    //           attr: {
    //             width: '100%',
    //             height: '100%'
    //           }
    //         },
    //         children: [
    //           {
    //             id: 3,
    //             properties: {
    //               type: 'div',
    //               attr: {
    //                 width: '100%',
    //                 height: '100%'
    //               }
    //             },
    //             parent: expected._root.children[0],
    //             children: []
    //           },
    //           {
    //             id: 4,
    //             properties: {
    //               type: 'div',
    //               attr: {
    //                 width: '100%',
    //                 height: '100%'
    //               }
    //             },
    //             parent: this._root.children[0],
    //             children: []
    //           }
    //         ]
    //       },
    //       {
    //         id: 2,
    //         properties: {
    //           type: 'div',
    //           attr: {
    //             width: '100%',
    //             height: '100%'
    //           }
    //         },
    //         parent: this._root
    //       }
    //     ]
    //   }
    // };
    console.log(createTree(arrayTree));
  });
});
