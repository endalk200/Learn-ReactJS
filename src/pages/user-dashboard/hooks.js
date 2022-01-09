import { useReducer, useCallback } from "react";
import { defaultUserState } from "./context";
import { reducer } from "./reducers";

export const useLocalStorage = () => {};

export const useLogReducer = (reducer, initialState) => {
	const [state, dispatch] = useReducer(reducer, defaultUserState);

	const enhancedDispatch = (action) => {
		const preHistroy = JSON.parse(localStorage.getItem("userHistory")) ?? {};

		const history = [
			{
				...preHistroy
			},
			{
				...action,
				time: new Date()
			}
		];

		localStorage.setItem("userHistory", JSON.stringify(history));

		dispatch(action);
	};

	return [state, enhancedDispatch];
};
