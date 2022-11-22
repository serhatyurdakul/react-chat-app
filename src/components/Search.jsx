import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <div className="userChatInfo">
          <span>Necmiye</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
