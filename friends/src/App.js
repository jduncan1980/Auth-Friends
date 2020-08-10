import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
	container: {
		minHeight: '100vh',
	},
});

function App() {
	const history = useHistory();
	const [loggedIn, setLoggedIn] = useState(
		Boolean(localStorage.getItem('authToken'))
	);
	const classes = useStyles();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const logOut = () => {
		localStorage.removeItem('authToken');
		setLoggedIn(false);
		history.push('/');
	};

	return (
		<React.Fragment>
			<Navbar
				loggedIn={loggedIn}
				logOut={logOut}
				setDialogOpen={setDialogOpen}
			/>
			<Container
				maxWidth='lg'
				className={classes.container}
				direction='column'
				alignItems='center'
				justify='center'
			>
				<Switch>
					<Route exact path='/'>
						<Login setChecked={setLoggedIn} loggedIn={loggedIn} />
					</Route>
					<PrivateRoute
						path='/friends'
						component={FriendsList}
						dialogOpen={dialogOpen}
						setDialogOpen={setDialogOpen}
						setLoading={setLoading}
						loading={loading}
					/>
				</Switch>
			</Container>
		</React.Fragment>
	);
}

export default App;
