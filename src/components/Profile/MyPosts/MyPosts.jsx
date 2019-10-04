import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLenght50 = maxLenghtCreator(50);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your text"} name={"newPostText"} component={Textarea}
                       validate={[required, maxLenght50]}/>
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm)

const MyPosts = (props) => {
    let addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                {props.profilePage.posts.map(p => <Post text={p.text} likes={p.likes} image={p.imageUrl} id={p.id}/>)}
            </div>
        </div>
    )
}

export default MyPosts;