import { useState } from 'react';
import BacklogItem from './BacklogItem/BacklogItem';
import { useDispatch, useSelector } from 'react-redux';
import {addNewTask, updateBacklogTask} from '../../../store/action';

const Backlog = () => {
  const backlogTasks = useSelector((state) => state.backlogTasks);
  const tasks = useSelector(state => state.tasks)
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const checkAndSaveTitle = (e, id) => {
    dispatch(updateBacklogTask(id, e.target.value));
  };

  const addTaskHandler = () => {
    setClicked(true);
    let counter = tasks.length
    dispatch(addNewTask('', '', 'backlog', ++counter));
  };

  const submitHandler = () => {
    setClicked(false);
  };

  const checkOutClick = (status) => {
    if (status === 'out') setClicked(false);
  };

  return (
    <div className='Kanban-item'>
      <h2 className='Kanban-item__title'>Backlog</h2>
      {backlogTasks.map((elem) => (
        <BacklogItem
          key={elem.id}
          elem={elem}
          checkTitle={checkAndSaveTitle}
          checkOutClick={checkOutClick}
        />
      ))}
      <button
        onClick={addTaskHandler}
        className='Kanban-item__add-btn'
        style={{ display: clicked ? 'none' : 'block' }}>
        Add card
      </button>
      <button
        className='Kanban-item__submit-btn'
        onClick={submitHandler}
        style={{ display: clicked ? 'block' : 'none' }}>
        Submit
      </button>
    </div>
  );
};

export default Backlog;
