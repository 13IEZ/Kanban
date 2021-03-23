import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './ReadyItem.scss'
import {useSelector} from 'react-redux';

const ReadyItem	= () => {
	const backlogTasks = useSelector(state => state.backlogTasks)

	return (
		<div className="ReadyItem">
			<Autocomplete
				id="combo-box-demo"
				className="ReadyItem__autocomplete"
				options={backlogTasks}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => <TextField {...params} variant="outlined" />}
			/>
		</div>
	)
}

export default ReadyItem;