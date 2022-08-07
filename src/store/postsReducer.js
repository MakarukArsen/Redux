import { ADD_POST, LIKE_POST } from "./types";

const initialState = {
    users: {
        R2D2: {
            userIcon: "https://7.allegroimg.com/original/06cfb0/cf8bc3fe404aa045766e8f9e1d57/NAKLEJKI-na-sciane-STAR-WARS-R2D2-100x64cm",
            userName: "R2D2",
            userNickName: "@ARTURITO",
        },
        AnakinSkywalker: {
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
        },
    },
    posts: [
        {
            id: 1,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate: "сьогодні о 10:46",
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: 887,
            comments: 182,
            reposts: 496,
        },
        {
            id: 2,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate: "сьогодні о 10:46",
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: 887,
            comments: 182,
            reposts: 496,
        },
        {
            id: 3,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate: "сьогодні о 10:46",
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: 887,
            comments: 182,
            reposts: 496,
        },
    ],
};
const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_POST: {
            return { ...state, posts: [...state.posts, action.post] };
        }
        case LIKE_POST: {
            const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
            const posts = [...state.posts];
            posts[foundPostIndex].likes += 1;
            return { ...state, posts: posts };
        }
        default: {
            return state;
        }
    }
};

export const postSelector = (state) => state.postsReducer.posts;
export const userSelector = (state) => state.postsReducer.users;

export default postsReducer;
