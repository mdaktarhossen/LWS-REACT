import React, { useState } from 'react';
import {sculptureList} from "./Data"

const Gallery = () => {
  const [index, setIndex]=useState(0);
  // const [showMore, setShowMore] = useState(false);

  // FUNCATION;
  function handleNextClick() {
    setIndex(index + 1);
  };

  // function handleMoreClick() {
  //   setShowMore(!showMore);
  // };

  const sculpture=sculptureList[index];

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      {/* <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>} */}
    </div>
  );
};

export default Gallery;