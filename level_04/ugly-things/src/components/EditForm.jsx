import React, { useContext, useState } from "react";
import { UglyContext } from "./UglyContext";

const EditForm = ({ uglyThingId, onCancel }) => { //takes two props uglyThingId and onCancel
  //Access the UglyContext to get the list of uglyThings and setUglyThings
  const { uglyThings, setUglyThings } = useContext(UglyContext);

  //find the ugly thing to edi but its ID
  const uglyThingToEdit = uglyThings.find((thing) => thing._id === uglyThingId);

  //Initialize state with the existing data for editing
  const [editedUglyThing, setEditedUglyThing] = useState({
    imgUrl: uglyThingToEdit.imgUrl, //data that I want to be edited
    title: uglyThingToEdit.title,
    description: uglyThingToEdit.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //destructure by extracting the name and the value
    setEditedUglyThing((prevEditedUglyThing) => ({
      ...prevEditedUglyThing,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUglyThings((prevUglyThings) =>
      prevUglyThings.map((thing) =>
        thing._id === uglyThingId //checks if the "_id" property of the current "thing" is the same as the "uglyThingId"
          ? { ...editedUglyThing, _id: thing._id } //if matches(true), we use spread to apply all the new properties that are being applied.
          : thing //makes sure that not all the items are being edited, original data is kept the same
      )
    );
    onCancel();
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        onChange={handleChange}
        value={editedUglyThing.imgUrl}
      />
      <input type="text" name="title" placeholder="Title"  onChange={handleChange} value={editedUglyThing.title}/>
      <input type="text" name="description" placeholder="Description" onChange={handleChange} value={editedUglyThing.description} />
      <button>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditForm;
