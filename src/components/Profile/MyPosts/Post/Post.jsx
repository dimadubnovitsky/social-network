import React from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';

const Post = (props) => (
    <div className={classes.item}>
        <img src={props.image} alt=""/>
        {props.text}
        <div>
            <span>{props.likes} like</span>
        </div>
    </div>
);

Post.propTypes = {
    // image: PropTypes.object.isRequired,
    image: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.number,
};

export default Post;