import { useCallback, useReducer } from "react";
import { UserContext, defaultUserState } from "./context";
import { useLogReducer } from "./hooks";
import { reducer, LOGIN, LOGOUT, SIGNUP } from "./reducers";

export const UserContextProvider = ({ children }) => {
	const [state, dispatch] = useLogReducer(reducer, defaultUserState);

	const login = useCallback(
		({ ...userInfo }) => {
			dispatch({
				type: LOGIN,
				payload: { ...userInfo }
			});
		},
		[dispatch]
	);

	const logout = useCallback(() => {
		dispatch({
			type: LOGOUT
		});
	}, [dispatch]);

	return <UserContext.Provider value={[state, login, logout]}>{children}</UserContext.Provider>;
};
