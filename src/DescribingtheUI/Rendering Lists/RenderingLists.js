//---------- You will learn-------
// How to render components from an array using JavaScript’s map()
// How to render only specific components using JavaScript’s filter()
// When and why to use React keys

import React from 'react';
// Rendering data from arrays 
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

const RenderingLists = () => {
  const listItems=people.map(listItem=><li>{listItem}</li>);
  return listItems;
};

export default RenderingLists;