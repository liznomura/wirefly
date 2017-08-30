import React from 'react';

const Tab = ({elType, elId, handleDel}) => {
  return (
    <div className="tab">
    { elType }
    <div className="delete" onClick={ handleDel } data-id={ elId }/>
    </div>
    )
};

export default Tab;
