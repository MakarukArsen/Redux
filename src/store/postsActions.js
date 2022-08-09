import { ADD_POST, COMMENT_POST, LIKE_POST, REPOST_POST } from "./types";

export const addNewPost = (id, text, image, userIcon, userName, userNickName) => {
    return {
        type: ADD_POST,
        post: {
            id,
            userIcon,
            userName,
            userNickName,
            postDate: "сьогодні о 10:46",
            postText: text,
            userImage: image,
            likes: 887,
            comments: 182,
            reposts: 496,
        },
    };
};
export const likePost = (id, liked) => {
    return {
        type: LIKE_POST,
        payload: {
            id,
            liked,
        },
    };
};
export const commentPost = (id, commented) => {
    return {
        type: COMMENT_POST,
        payload: {
            id,
            commented,
        },
    };
};
export const repostPost = (id, reposted) => {
    return {
        type: REPOST_POST,
        payload: {
            id,
            reposted,
        },
    };
};
