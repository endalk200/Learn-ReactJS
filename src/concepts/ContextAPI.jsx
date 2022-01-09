import { createContext, memo, useContext, useReducer, useRef } from "react";

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

const CountContext = createContext();

const CounterProvider = ({ children }) => {
	const countState = useReducer(reducer, { count: 0, incrementBy: 1 });

	return <CountContext.Provider value={[...countState]}>{children}</CountContext.Provider>;
};

export const ContextAPI = memo(() => {
	// const countState = useReducer(reducer, { count: 0, incrementBy: 1 });

	return (
		<CounterProvider>
			{/* <CountContext.Provider value={[...countState]}> */}
			<h2 className="text-center" style={{ marginBlock: "0px" }}>
				Context API
			</h2>
			<Child />
			{/* </CountContext.Provider> */}
		</CounterProvider>
	);
});

const Child = () => {
	const [state, dispatch] = useContext(CountContext);

	const inputRef = useRef(null);

	return (
		<div className="text-center">
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
			<NestedChild />
		</div>
	);
};

const NestedChild = () => {
	const [state] = useContext(CountContext);
	return (
		<>
			<h3>Count: {state.count}</h3>
			<AnotherNestedChild />
		</>
	);
};

const AnotherNestedChild = () => {
	return (
		<CountContext.Consumer>
			{(value) => <h3>incrementBy: {value[0].count}</h3>}
		</CountContext.Consumer>
	);
};
