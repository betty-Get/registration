import React from "react";

const displayList = (props) => {
  const display = props.information.map((info) => {
    return (
      <div>
        <div>
          {info.firstName}
          {info.lastName}
        </div>
        <div>{info.email}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>contact list</h5>
      {display}
    </div>
  );
};

export default displayList;






