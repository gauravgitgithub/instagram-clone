import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

function Header(){
	return (
		<div className="header__instagram">
			<IconButton>
				<InstagramIcon className="icon__instagram" />
			</IconButton>
			<div className="logo__instagram">Instagram</div>
			<IconButton>
				<AddIcon className="newPost__instagram" />
			</IconButton>
		</div>
	)
}

export default Header;