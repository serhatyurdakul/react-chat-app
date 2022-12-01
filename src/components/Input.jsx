import React from "react";
import AddImage from "../img/addImage.svg";
import Attach from "../img/attach.svg";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={Attach} alt="Attach" title="Attach"/>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={AddImage} alt="Add Image" title="Add Image" />
        </label>
        <button title="send message">Send</button>
      </div>
    </div>
  );
};

export default Input;
