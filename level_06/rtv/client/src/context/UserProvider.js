import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
    votedIssueIds: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState); //handle user issues
  const [allIssues, setAllIssues] = useState([]); //handle all issues
  // const [votedIssueIds, setVotedIssueIds] = useState([]); //handle upvotes

  const initComments = {
    comments: {},
  };
  const [comments, setComments] = useState(initComments); //handle commnets


  // Sing up
  function signup(credetials) {
    axios
      .post("/auth/signup", credetials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  // Log in
  function login(credetials) {
    axios
      .post("/auth/login", credetials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserIssue();
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  // Log out
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
    });
  }

  function handleAuthErr (errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  // get user issues
  function getUserIssue() {
    userAxios
      .get("/api/issue/user")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // get all issues
  function getAllIssues() {
    userAxios
      .get("/api/issue/")
      .then((res) => {
        const sortedIssues = res.data.sort((a, b) => b.upvotes - a.upvotes);
        setAllIssues(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Add Issue
  function addIssue(newIssue) {
    userAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }


function upvoteIssue(issueId) {
  userAxios
    .put(`/api/issue/upVote/${issueId}`)
    .then((res) => {
      setAllIssues((prevIssues) =>
        prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
      );
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        ),
      }));
    })
    .catch((err) => console.log(err));
}

function downvoteIssue(issueId) {
  userAxios
    .put(`/api/issue/downVote/${issueId}`)
    .then((res) => {
      setAllIssues((prevIssues) =>
        prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
      );
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.map((issue) =>
          issueId !== issue._id ? issue : res.data
        ),
      }));
    })
    .catch((err) => console.log(err));
}


  // Get all comments
  // async function getComments(commentId) {
  //   try {
  //     const fetchedComments = await userAxios.get(`/api/comment/${commentId}`);
  //     return fetchedComments.data;
  //   } catch (error) {
  //     console.error(`Error fetching comments:`, error.message);
  //     return [];
  //   }
  // }

  function getComments(issueId) {
    userAxios
      .get(`/api/comment/${issueId}`)
      .then((res) => {
        setComments((prevState) => ({
          ...prevState,
          comments: {
            ...prevState.comments,
            [issueId]: res.data,
          },
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Post new comment
  function postNewComment(newComment, issueId) {
    userAxios
      .post(`/api/issue/addComment/${issueId}`, { text: newComment })
      .then((res) => {
        setAllIssues((prevState) =>
          prevState.map((issue) => (issue._id === issueId ? res.data : issue))
        );
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        getAllIssues,
        upvoteIssue,
        downvoteIssue,
        postNewComment,
        getComments,
        getUserIssue,
        allIssues,
        comments,
        setComments,
        resetAuthErr
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
