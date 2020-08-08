import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router-dom';

export default function LogoutSwitch({ checked, setChecked }) {
	let history = useHistory();

	function logOut() {
		setChecked(false);
		localStorage.removeItem('authToken');
		history.push('/');
	}

	return (
		<FormControlLabel
			// value='bottom'
			control={<Switch color='secondary' checked={checked} onChange={logOut} />}
			label='Log Out'
			labelPlacement='bottom'
		/>
	);
}
