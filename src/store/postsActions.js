import { ADD_POST, LIKE_POST } from "./types";

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
