import React, { useState } from 'react';

function header () {
  const [name, setName] = useState("Danielle Hoo");
  return (
    <div className="header">
      {/* <h1>
        Danielle Hoo<span className="blinking-cursor">|</span>
      </h1> */}
      <form>
        <input
          type="text"
          id="lname"
          name="lname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autofocus
        ></input>
      </form>
    </div>
  );
}

export default header