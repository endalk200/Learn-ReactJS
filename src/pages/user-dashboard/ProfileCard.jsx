import React, { Fragment } from "react";

export const ProfileCard = React.memo(({ username, firstName, lastName, email, profileSrc }) => {
	return (
		<Fragment>
			<h1>Wellcome {username}</h1>
			<h4>
				{firstName} {lastName}{" "}
			</h4>
		</Fragment>
	);
});
