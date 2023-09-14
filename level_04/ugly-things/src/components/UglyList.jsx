import React, { useContext, useState, useEffect } from "react";
import { UglyContext } from "./UglyContext"; //to acces the 'uglyThings' arary form the context
import UglyThing from "./UglyThing";

const UglyList = () => {
  const { uglyThings } = useContext(UglyContext);//using Context to import uglyThings

  const elements = uglyThings.map((thing) => { //map through it assing it to a varible
    return <UglyThing key={thing._id} {...thing} />; //spreading properties th ugly things, rendering in the 'UglyTHing' component
  });

  console.log(uglyThings);

  return (
    <div>
      <h2>List of Ugly Things</h2>
      {elements}
    </div>
  );
};

export default UglyList;
