import React from 'react';
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	makeStyles,
} from '@material-ui/core';
import LogoutSwitch from './LogoutSwitch';

const useStyles = makeStyles({
	tool: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: '3rem',
		margin: '0 auto',
	},
});

export default function Navbar({ loggedIn, logOut, setDialogOpen }) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar fixed>
				<Toolbar className={classes.tool}>
					{loggedIn && <LogoutSwitch loggedIn={loggedIn} logOut={logOut} />}
					<Typography as='h1' align='center' className={classes.heading}>
						All The Friends ?
					</Typography>
					{loggedIn && (
						<Button onClick={() => setDialogOpen(true)}>Add Friend!</Button>
					)}
				</Toolbar>
			</AppBar>
			{/* <Toolbar /> */}
		</React.Fragment>
	);
}
