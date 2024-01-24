import React, { useContext, useEffect } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";

export default function Profile() {
  const {
    user: { username },
    addIssue,
    issues,
    getUserIssue,
  } = useContext(UserContext);

  useEffect(() => {
    getUserIssue();
  }, []);
  
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add Issue</h3>
      <IssueForm addIssue={addIssue} />
      <h3>Your Issue</h3>
      <IssueList issues={issues} username={username} />
    </div>
  );
}
