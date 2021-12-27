import "./styles.css";

import {
	UseState,
	UseReducer,
	ContextAPI,
	ClassBasedState,
	CustomHook,
	Reference
} from "./concepts";

const Separator = () => <hr style={{ marginTop: "30px" }} />;

export default function App() {
	return (
		<div className="App">
			{/* <UseState /> */}
			{/* <Separator /> */}
			{/* <UseReducer /> */}
			{/* <Separator /> */}
			{/* <ContextAPI /> */}
			{/* <ClassBasedState /> */}
			{/* <CustomHook max={15} step={5} /> */}
			<Reference />
		</div>
	);
}
