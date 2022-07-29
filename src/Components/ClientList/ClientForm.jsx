import React from "react";
import { useState } from "react";

const ClientForm = (props) => {
  const { placeHolder, buttonText, alertEmptyText, onAdd } = props;
  const [formName, setFormName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setFormName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formName.length > 0) {
      const newClient = { id: Date(), name: formName };
      setFormName("");
      onAdd(newClient);
    } else {
      alert(alertEmptyText);
    }
  };

  return (
    <form className="ClientForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={formName}
        placeholder={placeHolder}
        onChange={handleChange}
      />
      <button>{buttonText}</button>
    </form>
  );
};

export default ClientForm;
