import React from 'react';
import { createStore } from 'redux';

function Rootreducer(state = { count: 0 }, action) {
	if (action.type === 'Increment') {
		return { count: state.count + 1 };
	} else if (action.type === 'Decrement') {
		return { count: state.count - 1 };
	} else if (action.type === 'Reset') {
		return { count: (state.count = 0) };
	}
}

const store = createStore(Rootreducer);
store.subscribe(() => {
	console.log(store.getState().count, 'when enters in the Subscribtion');
});
class Counter extends React.Component {
	constructor() {
		super();
		store.subscribe(() => {
			this.setState({ ...this.setState, count: store.getState().count });
		});
		this.state = {
			count: 0
		};
	}
	increment = () => {
		store.dispatch({ type: 'Increment' });
		console.log('In Increment');
	};
	decrement = () => {
		store.dispatch({ type: 'Decrement' });
		console.log('In Decrement');
	};
	Reset = () => {
		store.dispatch({ type: 'Reset' });
	};
	render() {
		return (
			<React.Fragment>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
				<button onClick={this.Reset}>Reset</button>
			</React.Fragment>
		);
	}
}

export default Counter;
