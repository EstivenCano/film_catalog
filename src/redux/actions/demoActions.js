import * as types from '../../constants/actionTypes';

export const getDemoRequest = payload => ({
	type: types.GET_DEMO_REQUEST,
	payload
});