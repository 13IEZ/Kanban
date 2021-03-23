import './Kanban.scss';
import Backlog from './Backlog/Backlog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../store/action';
import Ready from './Ready/Ready';

const Kanban = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  });

  return (
    <div className='Kanban'>
      <Backlog />
      <Ready />
    </div>
  );
};

export default Kanban;
