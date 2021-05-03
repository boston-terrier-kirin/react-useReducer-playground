// https://gist.github.com/adityaloshali/1291925b540de0f3e1cd886f5a473ee5

import { useReducer } from 'react';

const formReducer = (prevState, payload) => {
	const key = Object.keys(payload);
	const type = payload[key]['type'];
	let value = payload[key]['value'];

	if (type === 'checkbox') {
		const prevValue = prevState[key]['value'];
		value = !prevValue;
	}

	const newState = { [key]: { type, value } };
	return {
		...prevState,
		...newState,
	};
};

const initialState = {
	firstName: { type: 'text', value: '' },
	lastName: { type: 'text', value: '' },
	address: { type: 'text', value: '' },
	isMember: { type: 'checkbox', value: false },
};

function App() {
	const [state, updateState] = useReducer(formReducer, initialState);

	const handleChange = (event) => {
		const { value, name, type } = event.target;
		updateState({
			[name]: {
				type,
				value,
			},
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(state);
	};

	return (
		<div className="App">
			<h1>Hello, i'm your supposedly complex form.</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="input"
					type="text"
					name="firstName"
					placeholder="First Name"
					onChange={handleChange}
					value={state.firstName.value}
				/>
				<br />
				<input
					className="input"
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={handleChange}
					value={state.lastName.value}
				/>
				<br />
				<input
					className="input"
					type="text"
					name="address"
					placeholder="Address"
					onChange={handleChange}
					value={state.address.value}
				/>
				<br />
				<label className="container">
					Are you a member already?
					<input
						type="checkbox"
						name="isMember"
						onChange={handleChange}
						checked={state.isMember.value}
					/>
					<span className="checkmark" />
				</label>
				<button type="submit">Fire</button>
			</form>
		</div>
	);
}

export default App;
