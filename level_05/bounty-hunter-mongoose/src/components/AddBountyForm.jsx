import React, { useState } from "react";

const AddBountyForm = (props) => {
  const intiInputs = {
    name: props.name || "",
    lastName: props.lastName || "",
    bountyAmount: props.bountyAmount || "",
    kind: props.kind || "",
    living: props.living || false,
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
    <form className="form-input" onSubmit={handleSubmit}>
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
        name="kind"
        value={inputs.kind}
        onChange={handleChange}
        placeholder="Type"
      />
      <label className="living" htmlFor="living"> Alive: </label>
      <input
        type="checkbox"
        name="living"
        checked={inputs.living}
        onChange={(e) =>
          setInputs((prevInputs) => ({
            ...prevInputs,
            living: e.target.checked,
          }))
        }
        placeholder="Living"
      />
      <button className="add-bounty-btn">{props.btnText}</button>
    </form>
  );
};

export default AddBountyForm;
