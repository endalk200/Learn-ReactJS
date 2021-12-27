import { useState } from "react";

export const UseState = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="text-center">
			<h2 style={{ marginBlock: "0px" }}>useState</h2>
			<h4>Count: {count}</h4>
			<button
				onClick={() => {
					setCount((count) => count + 1);
					// setCount((count) => count + 1);
					// setCount((count) => count + 1);
				}}>
				Increment
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}>
				Decrement
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}>
				Reset
			</button>
		</div>
	);
};
