import { forwardRef, useRef } from "react";

export const Reference = () => {
	const inputRef = useRef();

	return (
		<>
			<InputField inputRef={inputRef} />
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

const InputField = forwardRef(({ inputRef }) => {
	return <input ref={inputRef} type="text" defaultValue={""} />;
});
