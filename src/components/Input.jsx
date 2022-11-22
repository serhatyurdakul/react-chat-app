import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <img src="" alt="" />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file"></label>
      <button>Send</button>
    </div>
  );
};

export default Input;
