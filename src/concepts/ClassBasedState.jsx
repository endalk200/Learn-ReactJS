import { Component, createRef } from "react";

const storeToLocalStorage = (state) => {
	localStorage.setItem("count", JSON.stringify(state));
};

export class ClassBasedState extends Component {
	constructor(props) {
		super(props);

		this.inputRef = createRef();

		this.state = { count: 0, incrementBy: 1 };
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
		this.handleIncrementBy = this.handleIncrementBy.bind(this);
		// this.handleReset = this.handleReset.bind(this);
	}

	componentDidMount() {
		const count = localStorage.getItem("count");

		if (count) this.setState(JSON.parse(count));
		else localStorage.setItem("count", JSON.stringify(this.state));

		document.title = `Count: ${this.state.count}`;
		this.inputRef.current.value = this.state.incrementBy;
	}

	handleIncrementBy() {
		this.setState(
			(state) => {
				// return { ...state, incrementBy: +this.inputRef.current.value };
				return Object.assign(state, { incrementBy: +this.inputRef.current.value });
			},
			() => {
				document.title = `Count: ${this.state.count}`;
				storeToLocalStorage(this.state);
			}
		);
	}

	handleIncrement() {
		/** If you uncomment the following it three calls it will increment three times */
		this.setState(
			(state) => {
				if (state.count >= 10 && state.count + state.incrementBy >= 10) return;
				return { ...state, count: state.count + state.incrementBy };
			},
			() => {
				document.title = `Count: ${this.state.count}`;
				storeToLocalStorage(this.state);
			}
		);
		// this.setState((state) => {
		// 	return { ...state, count: state.count + state.incrementBy };
		// });
		// this.setState((state) => {
		// 	return { ...state, count: state.count + state.incrementBy };
		// });

		/** The following three lines increment just one times. which is the end */
		// this.setState({ count: this.state.count + this.state.incrementBy });
		// this.setState({ count: this.state.count + this.state.incrementBy });
		// this.setState({ count: this.state.count + this.state.incrementBy });

		/** The following log doesn't log the current state */
		console.log(this.state);
	}

	handleDecrement() {
		this.setState(
			(state) => {
				return { ...state, count: state.count - state.incrementBy };
			},
			() => {
				document.title = `Count: ${this.state.count}`;
				localStorage.setItem("count", JSON.stringify(this.state));
			}
		);
	}

	/** The following function does not use bind in the constructor. No supported in some browsers */
	handleReset = () => {
		this.setState(
			() => {
				return { count: 0, incrementBy: 1 };
			},
			() => {
				document.title = `Count: ${this.state.count}`;
				this.inputRef.current.value = 1;
				localStorage.setItem("count", JSON.stringify(this.state));
			}
		);
	};

	render() {
		return (
			<div className="text-center">
				<h2 style={{ marginBlock: "0px" }}>Increment untill 10</h2>
				<h1>Count: {this.state.count}</h1>
				<input
					type="number"
					ref={this.inputRef}
					placeholder="Increment By"
					defaultValue={this.state.incrementBy}
				/>
				<button onClick={this.handleIncrementBy}>By</button>
				<button onClick={this.handleIncrement}>Increment</button>
				<button onClick={this.handleDecrement}> Decrement </button>
				<button onClick={this.handleReset}> Reset </button>
			</div>
		);
	}
}
