import React, { useState, useEffect, useRef } from "react";

const getStateFromLocalStorage = () => {
	const storage = localStorage.getItem("counterState");
	// console.log(storage);
	if (storage) return JSON.parse(storage).count;
	return { count: 0 };
};

const storeStateInLocalStorage = (count) => {
	localStorage.setItem("counterState", JSON.stringify({ count }));
	// console.log(localStorage);
};

const useLocalStorage = (initialState, key) => {
	const get = () => {
		const storage = localStorage.getItem(key);
		// console.log(localStorage, storage);
		if (storage) return JSON.parse(storage).value;
		return initialState;
	};

	const [value, setValue] = useState(get());

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify({ value }));
	}, [value]);

	return [value, setValue];
};

export const CustomHook = ({ max, step }) => {
	const [count, setCount] = useLocalStorage(0, "count");

	const previous = useRef(count);

	const increment = () => {
		setCount((c) => {
			if (c >= max) return c;
			previous.current = c;
			console.log(previous);
			return c + step;
		});
	};

	const decrement = () =>
		setCount((c) => {
			previous.current = c;
			return count - 1;
		});
	const reset = () => setCount(0);

	useEffect(() => {
		// Click "open in a new window" to see the title change
		document.title = `Counter: ${count}`;
	}, [count]);

	useEffect(() => {
		storeStateInLocalStorage(count);
	}, [count]);

	return (
		<div className="text-center">
			<p className="count">Count: {count}</p>
			<p className="count">Previous count: {previous.current}</p>
			<section className="controls">
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</section>
		</div>
	);
};
