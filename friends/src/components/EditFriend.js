import React from 'react';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import {
	Grid,
	TextField,
	// Typography,
	Button,
	makeStyles,
	Dialog,
	DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		padding: '10%',
		height: '20%',
		paddingBottom: '5%',
	},
	heading: {
		fontSize: '3rem',
		marginTop: '4rem',
	},
});

export default function EditFriendForm({
	friend,
	setFriends,
	dialogOpen,
	setDialogOpen,
}) {
	const classes = useStyles();
	const { handleSubmit, register, errors, formState } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		// console.log(data);
		axiosWithAuth()
			.put(`friends/${friend.id}`, data)
			.then((res) => {
				console.log(res);
				setFriends(res.data);
				setDialogOpen(false);
			})
			.catch((err) => {
				console.error(err.message);
				alert(`Something Went Wrong! Please Try Again!`);
			});
	};

	return (
		<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
			<DialogTitle>Edit Friend</DialogTitle>
			<Grid
				className={classes.container}
				component='form'
				item
				container
				spacing={1}
				onSubmit={handleSubmit(onSubmit)}
				direction='column'
				alignItems='center'
				justifyContent='space-between'
			>
				<Grid item>
					<TextField
						autoFocus
						variant='outlined'
						type='text'
						id='name'
						name='name'
						inputRef={register({ required: 'Required' })}
						defaultValue={friend.name}
						label='Name:'
						error={errors.name ? true : false}
						helperText={errors.name ? errors.name.message : null}
					/>
				</Grid>

				<Grid item>
					<TextField
						inputRef={register({
							required: 'Required',
						})}
						defaultValue={friend.age}
						variant='outlined'
						type='text'
						id='age'
						name='age'
						label='Age:'
						error={errors.age ? true : false}
						helperText={errors.age ? errors.age.message : null}
					/>
				</Grid>

				<Grid item>
					<TextField
						inputRef={register({
							required: 'Required',
						})}
						defaultValue={friend.email}
						variant='outlined'
						type='email'
						id='email'
						name='email'
						label='Email:'
						error={errors.email ? true : false}
						helperText={errors.email ? errors.email.message : null}
					/>
				</Grid>

				<Grid item>
					<Button
						variant='contained'
						color='primary'
						size='large'
						type='submit'
						disabled={!formState.isValid}
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Dialog>
	);
}
