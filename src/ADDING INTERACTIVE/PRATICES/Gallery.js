import React, { useState } from 'react';
import {sculptureList} from "./Data"

const Gallery = () => {
  const [index, setIndex]=useState(0);
  const [showMore, setShowMore]=useState(false)
  const sculpture=sculptureList[index];
  const handelNextBtn=()=>{
    setIndex(index+1);
  };
  const handelDetails=()=>{
    setShowMore(!showMore);
  }
  return (
    <div>
      <button onClick={handelNextBtn}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3>{index+1} of {sculptureList.length}</h3>
        <button onClick={handelDetails}>{showMore?"Hide": "Show"} Details</button>
        {/* <details> */}
          <h3>{ showMore && sculpture.description}</h3>
        {/* </details> */}
    </div>
  );
};

export default Gallery;