import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    Name: "akter",
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg'
  }});

  // F
  const handelNameChange=(e)=>{
    setPerson({
      ...person,
      Name:e.target.value
    })
  };
  const handelTitleChange=(e)=>{
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        title: e.target.value
      }
    })
  };
  const handelCityChange=(e)=>{
    setPerson({
      ...person,
      artwork:{
        ...person.artwork,
        city:e.target.value
      }
    })
  };
  const {Name,artwork}=person
  return (
    <div>
        <label>
          Name:
          <input type="text" value={Name} onChange={handelNameChange}/>
        </label>
        <label>
          <br />
          Title:
          <input type="text" value={artwork.title} onChange={handelTitleChange} />
        </label>
        <label>
          <br />
          City:
          <input type="text" value={artwork.city} onChange={handelCityChange} />
        </label>
        <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.Name}
        <br />
        (located in {person.artwork.city})
      </p>
    </div>
  );
};

export default Form;