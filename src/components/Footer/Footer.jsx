import './Footer.scss'
import {useSelector} from 'react-redux';

const Footer = () => {
	const backlogTasks = useSelector(state => state.backlogTasks)

	return (
		<div className="Footer">
			<div className="Footer-left">
				<p>Active tasks: {backlogTasks.length}</p>
				<p>Finished tasks: 0</p>
			</div>
			<div className="Footer-right">
				<p>React Kanban board by Igor Zakharov, 2021</p>
			</div>
		</div>
	)
};

export default Footer;