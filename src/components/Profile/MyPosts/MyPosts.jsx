import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let postText = event.target.value;
        props.onPostChange(postText);
    }

    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.profilePage.posts.map(p => <Post text={p.text} likes={p.likes} image={p.imageUrl} id={p.id}/>)}
            </div>
        </div>
    )
}

MyPosts.propTypes = {
    state: PropTypes.object,
}

export default MyPosts;