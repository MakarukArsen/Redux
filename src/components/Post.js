import React, { useState } from "react";
import classes from "./Posts.module.scss";
import HeartIcon from "./icons/HeartIcon";
import CommentIcon from "./icons/CommentIcon";
import RepostIcon from "./icons/RepostIcon";
import SaveIcon from "./icons/SaveIcon";
import { useDispatch } from "react-redux";
import { likePost } from "../store/postsActions";

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const { userIcon, userName, userNickName, postDate, postText, userImage, likes, comments, reposts } = post;

    const [liked, setLiked] = useState(false);

    const id = post.id;
    const like = () => {
        setLiked(!liked);
        console.log(liked);
        dispatch(likePost(id, liked));
    };
    return (
        <div className={classes.post}>
            <div className={classes.header}>
                <img className={classes.user__icon} src={userIcon} />
                <div className={classes.user__data}>
                    <div className={classes.user__info}>
                        <div className={classes.user__name}>{userName}</div>
                        <div className={classes.user__nickname}>{userNickName}</div>
                        <div className={classes.post__date}>{postDate}</div>
                    </div>
                    <div className={classes.post__text}>{postText}</div>
                </div>
            </div>
            <div className={classes.body}>
                <img className={classes.user__postImage} src={userImage} />
            </div>
            <div className={classes.footer}>
                <div className={classes.actions__row}>
                    <div onClick={like} className={classes.actions}>
                        <HeartIcon className={classes.like__icon + " " + classes.icon} />
                        <div className={classes.likes}>{likes}</div>
                    </div>
                    <div className={classes.actions}>
                        <CommentIcon className={classes.comment__icon + " " + classes.icon} />
                        <div className={classes.comments}>{comments}</div>
                    </div>
                    <div className={classes.actions}>
                        <RepostIcon className={classes.repost__icon + " " + classes.icon} />
                        <div className={classes.reposts}>{reposts}</div>
                    </div>
                    <div className={classes.actions}>
                        <SaveIcon className={classes.save__icon + " " + classes.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
