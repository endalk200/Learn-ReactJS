import { forwardRef, useRef } from "react";

export const Reference = () => {
	const inputRef = useRef();

	return (
		<>
			<InputField ref={inputRef} />
			<button
				onClick={() => {
					console.log(inputRef);
					inputRef.current.focus();
				}}>
				Focus
			</button>
			<button
				onClick={() => {
					console.log(inputRef);
					alert(inputRef.current.value);
				}}>
				Get Value
			</button>
		</>
	);
};

const InputField = forwardRef((props, ref) => {
	return <input ref={ref} type="text" defaultValue={""} />;
});
