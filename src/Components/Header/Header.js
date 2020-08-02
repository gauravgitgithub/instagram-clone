import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import UploadPosts from '../Upload/UploadPosts';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ previousPage }){
	const history = useHistory();

	return (
		<div className="header__instagram">
			<IconButton>
				<InstagramIcon className="icon__instagram" />
			</IconButton>
			<div className="logo__instagram">Instagram</div>
			{ previousPage ? (

				<IconButton onClick={() => history.replace(previousPage)} >
					<ArrowBackIosIcon fontSize = 'large' className="header-icon" />
				</IconButton>


			) : (
				<Link to="/new-post">
					<IconButton>
						<AddIcon className="newPost__instagram" />
					</IconButton>
				</Link>
			) }
	

		</div>
	)
}

export default Header;