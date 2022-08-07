import React from "react";
import PostForm from "./PostForm";
import Post from "./Post";
import { useSelector } from "react-redux";
import { postSelector } from "../store/postsReducer";
import classes from "./Posts.module.scss";
import { v4 } from "uuid";

const PostList = () => {
    const posts = useSelector(postSelector);
    return (
        <div className={classes.postList}>
            <h1 className={classes.title}>HW#19 Redux</h1>
            <PostForm />
            <h2 className={classes.title}>Пости</h2>
            {posts.map((post) => {
                return <Post post={post} key={v4()} />;
            })}
        </div>
    );
};

export default PostList;
