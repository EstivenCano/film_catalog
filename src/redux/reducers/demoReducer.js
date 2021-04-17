import * as types from '../../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action) {
	switch (action.type) {
		case types.GET_DEMO_REQUEST:
			return [...state];
		case types.GET_DEMO_SUCCESS:
			if (action.demoData) {
				return [...action, action.demoData];
			}
			return [...state, action];
		default:
			return state;
	}
}