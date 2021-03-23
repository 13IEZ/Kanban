import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ReadyItem from './ReadyItem/ReadyItem';


const Ready = () => {
	const [disable, setDisable] = useState(true);
	const backlogTasks = useSelector(state => state.backlogTasks)

	useEffect(() => {
		if (backlogTasks.length > 0) setDisable(false);
		else setDisable(true);
	}, [backlogTasks])

	return (
		<div className='Kanban-item'>
			<h2 className='Kanban-item__title'>Ready</h2>
			<ReadyItem />
			<button
				// onClick={console.log(1)}
				disabled={disable}
				className='Kanban-item__add-btn'>
				Add card
			</button>
		</div>
	);
};

export default Ready;