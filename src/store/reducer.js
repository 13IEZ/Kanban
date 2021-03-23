import { FETCH_STATUS_SUCCESS } from './actionTypes';
const initialState = {
  tasks: [],
  backlogTasks: [],
  readyTasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS_SUCCESS:
      return { ...state, tasks: action.payload, backlogTasks: action.payload.filter(elem => elem.status === 'backlog') };
    default:
      return state;
  }
};

export default reducer;
