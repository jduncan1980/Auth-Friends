import React from 'react';
import {
	AppBar,
	Toolbar,
	Switch,
	Typography,
	makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LogoutSwitch from './LogoutSwitch';

export default function Navbar({ checked, setChecked }) {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<LogoutSwitch checked={checked} setChecked={setChecked} />
				</Toolbar>
			</AppBar>
			<Toolbar />
		</React.Fragment>
	);
}
