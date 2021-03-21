import {FETCH_STATUS_SUCCESS} from './actionTypes';
const initialState = {
	tasks: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STATUS_SUCCESS:
			return {...state, tasks: action.payload};
		default:
			return state;
	}
};

export default reducer;