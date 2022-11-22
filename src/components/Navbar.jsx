import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <span>Serhat</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
