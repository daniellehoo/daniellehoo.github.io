import React, { useState } from 'react';


function moveCaretAtEnd(e) {
  let temp_value = e.target.value;
  e.target.value = "";
  e.target.value = temp_value;
}

function header () {
  const [name, setName] = useState("Danielle Hoo");
  return (
    <div className="header">
      <form>
        <input
          type="text"
          rows="10"
          id="lname"
          name="lname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          onFocus={moveCaretAtEnd}
        ></input>
      </form>
    </div>
  );
}

export default header