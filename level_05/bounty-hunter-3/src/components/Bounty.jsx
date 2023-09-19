import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

const Bounty = (props) => {
  const { name, lastName, bountyAmount, type, living, _id } = props;
  // console.log("Bounty ID:", _id);
  // console.log("Bounty Props:", props);
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h2>Name: {name} </h2>
          <h2>Last Name: {lastName}</h2>
          <h3>Bounty: {bountyAmount}</h3>
          <p>Type: {type}</p>
          <p>Living: {living}</p>
          <button
            onClick={() => props.deleteBounty(_id)}
            className="delete-btn"
          >
            Delete
          </button>
          <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <AddBountyForm
            name={name}
            lastName={lastName}
            bountyAmount={bountyAmount}
            type={type}
            living={living}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editBounty}
          />
          <button className="close-btn" onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Bounty;
