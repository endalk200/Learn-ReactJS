import { Fragment, useContext } from "react";
import { UserContext } from "./context";
import { ProfileCard } from "./ProfileCard";
import { UserContextProvider } from "./provider";

const Page = () => {
	const [state, login, logout] = useContext(UserContext);

	return (
		<Fragment>
			{state.isAuthenticated ? (
				<Fragment>
					<ProfileCard {...state.user} />
					<button
						onClick={() => {
							logout();
						}}>
						Logout
					</button>
				</Fragment>
			) : (
				<Fragment>
					<h1 className="text-center">You must login first</h1>
					<button
						onClick={() => {
							login({ username: "Endalk", password: "password" });
						}}>
						Login
					</button>
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
