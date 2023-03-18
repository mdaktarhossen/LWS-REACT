import React, { useState } from 'react';

const SnapShot = () => {
  const [name, setName]=useState("Alice");
  const [text, setText]=useState("Hellow");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${text} to ${name}`);
      
    }, 2000);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          To:{' '}
          <select value={name} onChange={e=>setName(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
        placeholder="Message"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SnapShot;