import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './ReadyItem.scss';
import {useSelector} from 'react-redux';

const ReadyItem = ({checkClickedItem, elem}) => {
	const backlogTasks = useSelector((state) => state.backlogTasks);

	return (
		<div className='ReadyItem'>
			<Autocomplete
				defaultValue={elem.title !== ''? elem : null}
				id='combo-box-demo'
				freeSolo={elem.title !== ''}
				disabled={elem.title !== ''}
				className='ReadyItem__autocomplete'
				options={backlogTasks}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => (
					<TextField {...params} variant='outlined' multiline/>
				)}
				onChange={(event, value) => {
					try {
						checkClickedItem(value.id);
					} catch (e) {
						console.log('Null');
					}
				}}
			/>
		</div>
	);
};

export default ReadyItem;
