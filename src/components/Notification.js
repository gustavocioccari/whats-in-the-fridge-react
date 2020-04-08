import React from "react";

const Notification = ({ notification }) => {
  return (
    <div className="notification">
      <h3>{notification}</h3>
    </div>
  );
};

export default Notification;