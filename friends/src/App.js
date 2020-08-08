import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar';
const useStyles = makeStyles({
	container: {
		backgroundColor: 'lightgray',
		minHeight: '100vh',
	},
});

function App() {
	const [checked, setChecked] = useState(
		Boolean(localStorage.getItem('login'))
	);
	const classes = useStyles();
	return (
		<Router>
			<Navbar checked={checked} setChecked={setChecked} />
			<Container
				maxWidth='lg'
				className={classes.container}
				direction='column'
				alignItems='center'
				justify='center'
			>
				<Switch>
					<Route exact path='/'>
						<Login setChecked={setChecked} />
					</Route>
					<PrivateRoute path='/friends' component={FriendsList} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
