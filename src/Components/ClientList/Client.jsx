import React from "react";

const Client = (props) => {
  const { details, onDelete } = props;
  return (
    <div className="Client">
      <p>{details.name}</p>
      <button className="button-delete" onClick={() => onDelete(details.id)}>
        X
      </button>
    </div>
  );
};

export default Client;
