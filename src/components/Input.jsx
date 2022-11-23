import React from "react";
import AddImage from "../img/addImage.svg"
import Attach from "../img/attach.svg"
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
        <img src={AddImage} alt="" /></label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
