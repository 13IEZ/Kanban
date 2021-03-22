import db from '../firebase';
import { FETCH_STATUS_SUCCESS } from './actionTypes';

const fetchStatusSuccess = (tasks) => {
  return { type: FETCH_STATUS_SUCCESS, payload: tasks };
};

export const addNewTask = (title, description, status) => {
  return (dispatch) => {
    db.ref('kanban').child('tasks').push({
      title,
      description,
      status,
    });
  };
};

export const updateTask = (id, title) => {
  return (dispatch) => db.ref(`kanban/tasks/${id}`).update({ title });
};

// export const fetchBacklog = () => {
//   return (dispatch) => {
//     db.ref('kanban/tasks/backlog').on('value', (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         dispatch(
//           fetchStatusSuccess(
//             Object.keys(data).map((id) => {
//               return { ...data[id], id };
//             })
//           )
//         );
//       } else {
//         dispatch(fetchStatusSuccess([]));
//       }
//     });
//   };
// };

export const fetchTasks = () => {
  return (dispatch) => {
    db.ref('kanban/tasks').on('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        dispatch(
          fetchStatusSuccess(
            Object.keys(data).map((id) => {
              return { ...data[id], id };
            })
          )
        );
      } else {
        dispatch(fetchStatusSuccess([]));
      }
    });
  };
};
