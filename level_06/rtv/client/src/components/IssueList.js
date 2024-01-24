import React from "react";
import Issue from "./Issue";

export default function IssueList(props){
    const { issues, username } = props

    return(
        <div className="issue-list">
            <h3>Issue list</h3>
            {issues.map(issue => <Issue {...issue} key={issue._id} username={username} issues={issues}/>)}

        </div>
    )
}
