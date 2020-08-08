import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

import {
	Grid,
	Typography,
	CircularProgress,
	makeStyles,
} from '@material-ui/core';
import AddFriendForm from './AddFriendForm';

const useStyles = makeStyles({
	container: {
		paddingTop: '10%',
	},
	heading: {
		fontSize: '3rem',
		paddingTop: '3rem',
	},
});

export default function FriendsList() {
	const [friends, setFriends] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		axiosWithAuth()
			.get('friends')
			.then((res) => {
				setFriends(res.data);
			});
	}, []);

	return (
		<React.Fragment>
			<Typography as='h1' align='center' className={classes.heading}>
				All The Friends ?
			</Typography>
			<Grid
				container
				spacing={2}
				alignItems='center'
				justify='space-evenly'
				className={classes.container}
			>
				{friends &&
					friends.map((friend) => {
						return (
							<Grid item key={friend.id}>
								<FriendCard friend={friend} setFriends={setFriends} />
							</Grid>
						);
					})}
			</Grid>
			<AddFriendForm setFriends={setFriends} />
		</React.Fragment>
	);
}
