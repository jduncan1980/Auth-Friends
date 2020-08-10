import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

import {
	Grid,
	Typography,
	CircularProgress,
	Box,
	makeStyles,
} from '@material-ui/core';
import AddFriendForm from './AddFriendForm';

const useStyles = makeStyles({
	container: {
		paddingTop: '10%',
	},
	loading: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '3%',
		width: '30%',
		background: 'white',
		borderRadius: '20px',
		transform: 'translateY(150%)',
		margin: '0 auto',
	},
});

export default function FriendsList({
	dialogOpen,
	setDialogOpen,
	loading,
	setLoading,
}) {
	const [friends, setFriends] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		setLoading(true);
		axiosWithAuth()
			.get('friends')
			.then((res) => {
				setFriends(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err.message);
				localStorage.removeItem('authToken');
				alert(`Something Went Wrong! Please Try Again!`);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<Box className={classes.loading}>
				<CircularProgress size={60} />
				<Typography variant='h3' color='initial'>
					Loading...
				</Typography>
			</Box>
		);
	}

	return (
		<React.Fragment>
			<Grid
				container
				spacing={2}
				justify='space-evenly'
				className={classes.container}
			>
				{friends &&
					friends.map((friend) => {
						return (
							<Grid item key={friend.id}>
								<FriendCard
									friend={friend}
									setFriends={setFriends}
									setLoading={setLoading}
								/>
							</Grid>
						);
					})}
			</Grid>
			<AddFriendForm
				setFriends={setFriends}
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
				setLoading={setLoading}
			/>
		</React.Fragment>
	);
}
