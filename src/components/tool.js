import React from 'react';

const Tool = ({dataType, dragStart, dragEnd, height}) => {
  return (
    <div className="tool" draggable="true" onDragStart={dragStart} onDragEnd={dragEnd} data-type={dataType}/>
    )
};

export default Tool;