import { Fragment, useContext } from "react";
import { UserContext } from "./context";
import { Login } from "./Login";
import { ProfilePage } from "./ProfilePage";
import { UserContextProvider } from "./provider";

const Page = () => {
	const [state, login, logout] = useContext(UserContext);

	return (
		<Fragment>
			{state.isAuthenticated ? (
				<Fragment>
					<ProfilePage {...state.user} />
					<button
						onClick={() => {
							logout();
						}}>
						Logout
					</button>
				</Fragment>
			) : (
				<Fragment>
					<Login />
				</Fragment>
			)}
		</Fragment>
	);
};

export const Dashboard = () => {
	return (
		<UserContextProvider>
			<Page />
		</UserContextProvider>
	);
};
