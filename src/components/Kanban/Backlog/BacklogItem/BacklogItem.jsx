import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import './BacklogItem.scss';

const BacklogItem = ({ elem, checkTitle, checkOutClick }) => {
  const [newTask, setNewTask] = useState(true);

  const checkNewTask = () => {
    if (elem.title === '') setNewTask(true);
    else setNewTask(false);
  };

  const checkBlur = () => {
    setNewTask(false);
    checkOutClick('out');
  };

  useEffect(() => {
    checkNewTask();
  }, []);

  return (
    <div className='BacklogItem'>
      <TextField
        onBlur={(e) => checkBlur(e)}
        onChange={(e) => checkTitle(e, elem.id)}
        autoFocus={newTask ? true : false}
        disabled={newTask ? false : true}
        className='Kanban-item__task'
        id='filled-textarea'
        multiline
        variant='outlined'
        defaultValue={elem.title}
      />
    </div>
  );
};

export default BacklogItem;
