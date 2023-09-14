import React, { useContext, useState } from "react";
import { UglyContext } from "./UglyContext";
import EditForm from "./EditForm"

const UglyThing = (props) => { //renders recevies the properties of an ugly thing and renders them
  const { deleteUglyThing} = useContext(UglyContext);
  const [isEditing, setIsEditing] = useState(false);//false makes sure when component is firs rendered it is not set to edit mode by default.

  const handleEdit = () => {
    setIsEditing(true); //set it to true so when the edit but is clicked it triggers the edit func
  }

  const handleCancelEdit = () => {
    setIsEditing(false); //set it to false, so it sets the cancel button is clicked, triggers the isEditing back to false
  }
  const handleDelete = () => {
    deleteUglyThing(props._id)
  };
  console.log(props._id)

  return (
    <div className="ugly-thing-container">
      <h3>UglyThing</h3>
      <img className="imgUrl" src={props.imgUrl} alt="Ugly Thing" />
      <h3 className="ugly-thing-title">{props.title}</h3>
      <p className="ugly-thing-description">{props.description}</p>
      <div  className="ugly-thing-buttons">
      <button className="ugly-thing-delete-button" onClick={handleDelete}>Delete</button>

      <button className="ugly-thing-edit-button" onClick={handleEdit}>Edit</button>
      {isEditing && ( //conditional in jsx to check if the value of "isEditing", if true it executes the EditForm
        <EditForm
          uglyThingId={props._id}
          onCancel={handleCancelEdit}
        />
        )}
        </div>
    </div>
  );
};

export default UglyThing;
