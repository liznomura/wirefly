import React from 'react';

const Tool = ({dataType, handleOnClick}) => {

  return (
    <li className={'tool ' + dataType} data-type={dataType} onClick={handleOnClick}>{dataType}</li>
    )
};

export default Tool;