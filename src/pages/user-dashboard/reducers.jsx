export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export const reducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return { isAuthenticated: true, user: { ...action.payload } };
		case LOGOUT:
			return { isAuthenticated: false, user: null };
		default:
			throw new Error();
	}
};
