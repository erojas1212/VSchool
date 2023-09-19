import React, { useState } from "react";

const AddBountyForm = (props) => {
  const intiInputs = {
    name: props.name || "",
    lastName: props.lastName || "",
    bountyAmount: props.bountyAmount || "",
    type: props.type || "",
    living: props.living || "",
  };
  const [inputs, setInputs] = useState(intiInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(intiInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={inputs.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="bountyAmount"
        value={inputs.bountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount"
      />
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Type"
      />
       <input
        type="text"
        name="living"
        value={inputs.living}
        onChange={handleChange}
        placeholder="Living"
      />
      <button>{ props.btnText }</button>
    </form>
  );
};

export default AddBountyForm;
