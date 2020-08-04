import React, { useContext } from 'react';
import { UserContext } from "../../Providers/UserProvider";
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Profile(){

	const user = useContext(UserContext);
  	const {photoURL, displayName, email} = user;

	return (
		<div className="Profile__instagram">
			<h3 className="profileHeading__instagram">My Profile</h3>
			<div className="profileWrapper__instagram">
				<Avatar className="Profileimage__instagram" alt={displayName} src={photoURL} />
				<div className="postsCount__instagram">
					<p>180 Posts</p>
					<p>2k likes</p>

				</div>
			</div>
			<div className="ProfileBio__instgram">
				<div className="Profilename__instagram"> { displayName } </div>
				<p>Traveller. Developer. Live in the sunshine where you belong.</p>
			</div>
			<div className="profileInfo__instagram">
				<div><p>Name</p><p className="info__instagram">{ displayName }</p></div>
				<div><p>Email</p><p className="info__instagram">{ email }</p></div>
				<div><p>Username</p><p className="info__instagram"> gauravraj </p> <KeyboardArrowRightIcon className="change__instagram" /> </div>
				<div><p>Profile Icon</p><p className="info__instagram"></p> <KeyboardArrowRightIcon className="change__instagram" /> </div>
			</div>
		</div>
	)
}

export default Profile;