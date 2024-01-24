import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./components/Bounty.jsx";
import AddBountyForm from "./components/AddBountyForm.jsx";


//dseVndobmkYvO8gv mongodb+srv://edurojas1212:<password>@cluster0.4ljboll.mongodb.net/
function App() {
  const [bounty, setBounty] = useState([]);

  const getBounties = () => {
    axios
      .get("/bounty")
      .then((res) => setBounty(res.data))
      .catch((err) => console.log(err));
  };

  const addBounty = (newBounty) => {
    axios
      .post("/bounty", newBounty)
      .then((res) => {
        setBounty((prevBounty) => [...prevBounty, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteBounty = (bountyId) => {
    axios
      .delete(`/bounty/${bountyId}`)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.filter((bounty) => bounty._id !== bountyId)
        );
      })
      .catch((err) => console.log(err));
  };

  const editBounty = (updates, bountyId) => {
    axios
      .put(`/bounty/${bountyId}`, updates)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.map(bounties => bounties._id !== bountyId ? bounties : res.data)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBounties();
  }, []);


  return (
    <div className="bounty-container">
      <h1 className="bounty-title">Bouty Hunter</h1>
      <AddBountyForm submit={addBounty} btnText="Add Bounty" />

      {bounty.map((bounty) => (
        <Bounty
          {...bounty}
          key={bounty.name}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
        />
      ))}
    </div>
  );
}

export default App;
