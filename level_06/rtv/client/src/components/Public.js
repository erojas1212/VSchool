import React, { useContext, useEffect } from "react";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";

export default function Public() {
  const { allIssues, getAllIssues } = useContext(UserContext);

  useEffect(() => {
    getAllIssues();
  }, []);

  return (
    <div className="public">
      <h2>Public Page</h2>
      <IssueList issues={allIssues} />
    </div>
  );
}
