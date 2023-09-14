//Form component responsible for handling the input fields for the submittin ugly things

import React, { useContext, useState } from "react";
import { UglyContext } from "./UglyContext";

const Form = () => {
  const [uglyThingsValue, setUglyThingsValue] = useState({
    imgUrl: "",
    title: "",
    description: "",
  });

  const {setUglyThings} = useContext(UglyContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUglyThingsValue((prevUglyThingsValue) => {
      return {
        ...prevUglyThingsValue,
        [name]: value,
      };
    });
  };

  //axio .post add the items to data base 

  const handleSubmit = (e) => {
    e.preventDefault();
   setUglyThings(prevUglyThings => {
    return [
      ...prevUglyThings,
      uglyThingsValue
    ]
   })
  };

 console.log(uglyThingsValue)
  return (
    <form className="edit-form-container" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="imgUrl"
          placeholder="Image URL"
          className="edit-form-input"
          value={uglyThingsValue.imgUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="edit-form-input"
          value={uglyThingsValue.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="edit-form-input"
          value={uglyThingsValue.description}
          onChange={handleChange}
        />
        <button className="ugly-thing-submit-button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
