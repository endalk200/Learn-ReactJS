import { useEffect, useReducer, useRef } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, count: state.count + state.incrementBy };
		case "DECREMENT":
			return { ...state, count: state.count - state.incrementBy };
		case "RESET":
			return { incrementBy: 1, count: 0 };
		case "CHANGE_INCREMENT_BY":
			return { ...state, incrementBy: action.payload };
		default:
			throw new Error();
	}
};

const initialize = (initialState) => {
	if (initialState.count) return initialState;
	return { count: 0, incrementBy: 1 };
};

export const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
	// const [state, dispatch] = useReducer(reducer, {}, initialize);

	const inputRef = useRef(null);

	return (
		<div className="text-center">
			<h2 style={{ marginBlock: "0px" }}>useReducer</h2>
			<h1>Count: {state.count}</h1>
			<input
				type="number"
				ref={inputRef}
				placeholder="Increment By"
				defaultValue={state.incrementBy}
			/>
			<button
				onClick={() => {
					dispatch({ type: "CHANGE_INCREMENT_BY", payload: +inputRef.current.value });
				}}>
				By
			</button>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT" });
				}}>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch({ type: "DECREMENT" });
				}}>
				Decrement
			</button>
			<button
				onClick={() => {
					dispatch({ type: "RESET" });
				}}>
				Reset
			</button>
		</div>
	);
};
