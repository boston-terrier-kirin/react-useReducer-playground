import { useReducer } from 'react';

function enhancedReducer(state, payload) {
	console.log(state, payload);

	return {
		name: payload,
	};
}

const initialState = {
	name: '',
};

function Test() {
	const [state, dispatch] = useReducer(enhancedReducer, initialState);
	console.log(state.name);

	const handleChange = (event) => {
		dispatch(event.target.value);
	};

	return (
		<div>
			<input type="text" value={state.name} onChange={handleChange} />
		</div>
	);
}

export default Test;
