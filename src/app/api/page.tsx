"use client";

import { useState } from "react";

const Api = () => {
  const [number, setnumber] = useState(0);
  const [username, setusername] = useState("");

  return (
    <>
      <h1> {number} </h1>
      <div>
        <button onClick={() => setnumber(number + 3)}> add </button>
      </div>

      <br />
      <br />
      <input
        type="text"
        name="name"
        onChange={(e) => setusername(e.target.value)}
        className="border-collapse border-spacing-3 border-2 border-violet-800 rounded focus:border-violet-400"
      />
      <h1>Hello, {username} </h1>
    </>
  );
};

export default Api;
