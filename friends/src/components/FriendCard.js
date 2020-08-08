import React, { useState } from 'react';
import EditFriend from './EditFriend';
import {
	Typography,
	CardContent,
	Card,
	CardActions,
	makeStyles,
	Button,
} from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function FriendCard({ friend, setFriends }) {
	const classes = useStyles();
	const [dialogOpen, setDialogOpen] = useState(false);

	const deleteFriend = () => {
		axiosWithAuth()
			.delete(`friends/${friend.id}`)
			.then((res) => {
				setFriends(res.data);
			});
	};
	return (
		<React.Fragment>
			<Card className={classes.root} variant='outlined'>
				<CardContent>
					<Typography
						className={classes.title}
						color='textSecondary'
						gutterBottom
					>
						Name: {friend.name}
					</Typography>
					<Typography className={classes.pos} color='textSecondary'>
						Age: {friend.age}
					</Typography>
					<Typography variant='body2' component='p'>
						Email: {friend.email}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' onClick={deleteFriend}>
						Delete Friend
					</Button>
					<Button size='small' onClick={() => setDialogOpen(true)}>
						Edit Friend
					</Button>
				</CardActions>
			</Card>
			<EditFriend
				friend={friend}
				setFriends={setFriends}
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
			/>
		</React.Fragment>
	);
}
