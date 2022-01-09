import React, { Fragment } from "react";

const Welcome = ({ username }) => {
	return <h4 className="text-center">Welcome {username}</h4>;
};

const ProfileCard = ({ username, firstName, lastName }) => {
	return (
		<Fragment>
			<h5>{username}</h5>
			<p>
				First Name: {firstName} <br />
				Last Name: {lastName} <br />
			</p>
		</Fragment>
	);
};

export const ProfilePage = ({ username, firstName, lastName, email, profileSrc }) => {
	return (
		<Fragment>
			<Welcome username={username} />
			<ProfileCard username={username} firstName={firstName} lastName={lastName} />
		</Fragment>
	);
};
