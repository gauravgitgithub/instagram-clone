import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import './Post.css';

function Post({name, username, timeStamp, likes, caption, userAvatar, url}){
	return(
		<div className="individualPost__instagram">
			<div className="postHead__instagram">
				<Avatar className="username__image" alt={name} src={userAvatar} />
				<p> { username } </p> 
			</div>
			<img className="userimage__instagram" src={url} alt={name} title={name} />
			<div className="postActions__instagram">
				<IconButton>
					<FavoriteBorderIcon />
				</IconButton>
			</div>
			<p className="postLikes__instagram"> {likes} likes </p>
			<div className="userCatption__instagram">
				<p className="postUser__caption"><b>{name}</b>{caption}</p>
			</div>
		</div>
	)
}

export default Post;