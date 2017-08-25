import React from 'react';

const Tool = ({dataType, handleOnClick}) => {
  return (
    <div className="tool" data-type={dataType} onClick={handleOnClick}>{dataType}</div>
    )
};

export default Tool;