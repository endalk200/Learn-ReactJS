import "./styles.css";

import {
	UseState,
	UseReducer,
	ContextAPI,
	ClassBasedState,
	CustomHook,
	Reference
} from "./concepts";
import { Dashboard } from "./pages";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Separator = () => <hr style={{ marginTop: "30px" }} />;

export default function App() {
	return (
		// <BrowserRouter>
		// 	<ul className="nav">
		// 		<li>
		// 			<NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				Home
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/useState"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				useState
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/useReducer"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				useReducer
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/contextAPI"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				contextAPI
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/CustomHook"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				CustomHook
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/Reference"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				Reference
		// 			</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink
		// 				to="/dashboard"
		// 				className={({ isActive }) => (isActive ? "active" : undefined)}>
		// 				Dashboard
		// 			</NavLink>
		// 		</li>
		// 	</ul>
		// 	<Routes>
		// 		<Route path="/" element={<Home />} />
		// 		<Route path="/useState" element={<UseState />} />
		// 		<Route path="/useReducer" element={<UseReducer />} />
		// 		<Route path="/contextAPI" element={<ContextAPI />} />
		// 		<Route path="/CustomHook" element={<CustomHook max={15} step={5} />} />
		// 		<Route path="/Reference" element={<Reference />} />
		// 		<Route path="/dashboard" element={<Dashboard />} />
		// 	</Routes>
		// </BrowserRouter>
		<Dashboard />
	);
}
