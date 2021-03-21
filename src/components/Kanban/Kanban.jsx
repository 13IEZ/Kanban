import './Kanban.scss'
import Backlog from './Backlog/Backlog';

const Kanban = () => {
	return (
		<div className="Kanban">
			<Backlog />
			<Backlog />
			<Backlog />
			<Backlog />
		</div>
	)
}

export default Kanban