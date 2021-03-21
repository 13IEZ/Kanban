import './Backlog.scss';
import {useState} from 'react';

const Backlog = () => {
	const [clicked, setClicked] = useState(false);


	return (
		<div className="Kanban-item">
			<h2 className="Kanban-item__title">Backlog</h2>
			<div className="Kanban-item__task">lorem15</div>
			<button className="Kanban-item__add-btn" style={{display: clicked ? 'none' : 'block'}}>Add card</button>
			<button className="Kanban-item__submit-btn" style={{display: clicked ? 'block' : 'none'}}>Submit</button>
		</div>
	);
};

export default Backlog;