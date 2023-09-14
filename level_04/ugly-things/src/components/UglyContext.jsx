import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const UglyContext = createContext(); //create context, to hold state and functions

const UglyProvider = (props) => {  //provides context values to its childthe value prop
  const [uglyThings, setUglyThings] = useState([]);

  const baseUrl = "https://api.vschool.io/Ed/thing";

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        console.log(response.data, "getting");
        setUglyThings(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //DELETE
  const deleteUglyThing = (uglyThingId) => { //uglyThingId represents the ID of the ugly thin we want to delete
    axios.delete(`${baseUrl}/${uglyThingId}`).then(() => {
      console.log("Ugly thing deleted succesfully:", uglyThingId);
      setUglyThings((prevUglyThings) => //updates teh state of the React Context using 'setUglyThings'
        prevUglyThings.filter((thing) => thing._id !== uglyThingId) //filters the desired id
      )
    })
    .catch((err) => {
      console.log("Error deleting ugly thing", err)
    });
  };

  console.log(uglyThings);

  return (
    <UglyContext.Provider //context is used to wrap the applics components
      value={{
        uglyThings,
        setUglyThings,
        deleteUglyThing,
      }}
    >
      {props.children}
    </UglyContext.Provider>
  );
};
export { UglyContext, UglyProvider };
