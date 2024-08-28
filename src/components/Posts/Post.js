import React from "react";
import { useSelector } from "react-redux";
import Posts from "./Post/Post";
import useStyles from "./styles";

const Post = () => {
  const posts = useSelector((state) => state.post);
  const classes = useStyles();
  console.log(posts);

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
