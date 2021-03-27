import './EditForm.scss';
import {useHistory} from 'react-router';

const EditForm = () => {
  const history = useHistory();
  const closeHandler = (e) => {
    e.preventDefault()
    history.push('/');
  }
  return <form className="EditForm">
    <div className="EditForm-item">
      <input className="EditForm__input-title" type="text"/>
      <select className="EditForm__select" name="status" id="">
        <option value="default">Select status</option>
        <option value="backlog">Backlog</option>
        <option value="ready">Ready</option>
        <option value="in progress">In Progress</option>
        <option value="finished">Finished</option>
      </select>
    </div>
    <div className="EditForm-item">
      <textarea className="EditForm__description" />
    </div>
    <button className="EditForm__close" onClick={(e) => closeHandler(e)}/>
    <div className="EditForm-item">
      <button className="Kanban-item__submit-btn">Submit</button>
    </div>
  </form>;
};

export default EditForm;
