import React, { useState,useEffect } from 'react';
import database from '../Config/Firebase';
import Post from './Posts/Post';

function Posts(){

	const [posts, setPosts] = useState([]);

	useEffect(() => {

		const syncronize = database
							.collection("user_posts")
							.onSnapshot((snapshot) => 
								setPosts(snapshot.docs.map((doc) => doc.data()))
								);
		return () => {
			syncronize();
		}
	},[]);

	return(
		<div className="posts__instagram">
			{posts.map(post => (
				<Post
					name={post.first_name}
					username={post.username}
					timeStamp = {post.timeStamp}
					likes = {post.likes}
					caption = {post.caption}
					userAvatar= {post.userAvatar}
					url= {post.url}
				 />
			))}
		</div>
	)
}

export default Posts;