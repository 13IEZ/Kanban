import db from '../firebase';
import {FETCH_STATUS_SUCCESS} from './actionTypes';

const fetchStatusSuccess = tasks => {
	return {type: FETCH_STATUS_SUCCESS, payload: tasks};
};

export const fetchTasks = () => {
	return dispatch => {
		db.ref('kanban').on('value', snapshot => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				dispatch(fetchStatusSuccess(Object.keys(data).map(id => {
					return {...data[id], id};
				})));
			} else {
				dispatch(fetchStatusSuccess([]));
			}
		});
	};
};