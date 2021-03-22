import './Kanban.scss';
import Backlog from './Backlog/Backlog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../store/action';

const Kanban = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  });

  return (
    <div className='Kanban'>
      <Backlog />
      {/* <Backlog /> */}
      {/* <Backlog /> */}
      {/* <Backlog /> */}
    </div>
  );
};

export default Kanban;
