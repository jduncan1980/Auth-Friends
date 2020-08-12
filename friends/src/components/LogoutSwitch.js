import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function LogoutSwitch({ loggedIn, logOut }) {
	return (
		<FormControlLabel
			// value='bottom'
			control={
				<Switch color='secondary' checked={loggedIn} onChange={logOut} />
			}
			label='Log Out'
			labelPlacement='bottom'
		/>
	);
}
