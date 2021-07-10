import React from 'react';
import './flexbox.css';

function FlexBox() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">item 1</div>
        <div className="col">item 2</div>
        <div className="col">item 3</div>
      </div>
      <div className="row">
        <div className="col">item 1</div>
        <div className="col">item 2</div>
        <div className="col">item 3</div>
      </div>
    </div>
  );
}

export default FlexBox;
