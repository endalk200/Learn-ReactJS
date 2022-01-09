import { createContext } from "react";

export const defaultUserState = {
	isAuthenticated: false,
	user: null
};

export const UserContext = createContext(defaultUserState);
