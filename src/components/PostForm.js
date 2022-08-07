import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../store/postsActions";
import classes from "./Posts.module.scss";
import { useSelector } from "react-redux/es/exports";
import { postSelector, userSelector } from "../store/postsReducer";
const PostForm = () => {
    const [inputText, setInputText] = useState("");
    const [inputImage, setInputImage] = useState("");
    const [selectUser, setSelectUser] = useState("R2D2");

    const posts = useSelector(postSelector);
    const users = useSelector(userSelector);
    const id = posts.length - 1;
    const { R2D2, AnakinSkywalker } = users;

    const dispatch = useDispatch();

    const handleInputText = (e) => {
        setInputText(e.target.value);
    };

    const handleInputImage = (e) => {
        setInputImage(e.target.value);
    };

    const handleSelect = (e) => {
        setSelectUser(e.target.value);
    };

    const checkInputs = () => {
        if (!inputText) {
            setInputText("Lorem ipsum");
        }
        if (!inputImage) {
            setInputImage(
                "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
            );
        }
    };
    checkInputs();
    const handleSubmit = (e) => {
        e.preventDefault();
        checkInputs();

        if (selectUser === "R2D2") {
            dispatch(addNewPost(id, inputText, inputImage, R2D2.userIcon, R2D2.userName, R2D2.userNickName));
        } else {
            dispatch(
                addNewPost(id, inputText, inputImage, AnakinSkywalker.userIcon, AnakinSkywalker.userName, AnakinSkywalker.userNickName)
            );
        }
    };
    return (
        <div className={classes.postForm}>
            <form className={classes.form}>
                <div className={classes.row}>
                    <input onChange={handleInputText} className={classes.input__text + " " + classes.input} type="text" />
                    <input onChange={handleInputImage} className={classes.input__image + " " + classes.input} type="text" />
                    <select defaultValue={"R2D2"} onChange={handleSelect} className={classes.select}>
                        <option className={classes.option}>Anakin Skywalker</option>
                        <option className={classes.option}>R2D2</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className={classes.button} type="submit">
                    Створити пост
                </button>
            </form>
        </div>
    );
};

export default PostForm;
