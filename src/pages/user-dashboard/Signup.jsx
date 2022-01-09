import { UserContext } from "./context";

const { Fragment, useContext, useRef } = require("react");
const { InputField } = require("./InputField");

export const SignUp = () => {
	const [, login] = useContext(UserContext);

	const usernameRef = useRef();
	const passwordRef = useRef();

	return (
		<Fragment>
			<h1 className="text-center">You must login first</h1>
			<InputField ref={usernameRef} className="text-center" label="username" />
			<InputField ref={passwordRef} className="text-center" as="password" label="password" />
			<p className="text-center">
				<button
					onClick={() => {
						login({
							username: usernameRef.current.value,
							password: passwordRef.current.value
						});
					}}>
					Login
				</button>
			</p>
		</Fragment>
	);
};
