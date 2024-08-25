import React from "react";
import Posts from "./Post/Post";
import useStyles from "./styles";

const Post = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <h1>Post</h1>
      <Posts />
      <Posts />
      <Posts />
    </>
  );
};

export default Post;
