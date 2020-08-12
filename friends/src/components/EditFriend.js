import React from 'react';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import {
	TextField,
	Box,
	Button,
	makeStyles,
	Dialog,
	DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		paddingBottom: '5%',
	},
	heading: {
		fontSize: '3rem',
		marginTop: '4rem',
	},
	input: {
		width: '90%',
		display: 'block',
		margin: '30px auto',
	},
	button: {
		width: '40%',
		margin: '40px auto',
		display: 'block',
	},
});

export default function EditFriendForm({
	friend,
	setFriends,
	dialogOpen,
	setDialogOpen,
	setLoading,
}) {
	const classes = useStyles();
	const { handleSubmit, register, errors, formState } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		setLoading(true);
		axiosWithAuth()
			.put(`friends/${friend.id}`, data)
			.then((res) => {
				console.log(res);
				setFriends(res.data);
				setDialogOpen(false);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err.message);
				alert(`Something Went Wrong! Please Try Again!`);
				setLoading(false);
			});
	};

	return (
		<Dialog
			fullWidth={true}
			maxWidth={'sm'}
			open={dialogOpen}
			onClose={() => setDialogOpen(false)}
		>
			<DialogTitle>Edit Friend</DialogTitle>
			<Box
				className={classes.container}
				component='form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<TextField
					className={classes.input}
					fullWidth={true}
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

				<TextField
					className={classes.input}
					inputRef={register({
						required: 'Required',
					})}
					fullWidth={true}
					defaultValue={friend.age}
					variant='outlined'
					type='text'
					id='age'
					name='age'
					label='Age:'
					error={errors.age ? true : false}
					helperText={errors.age ? errors.age.message : null}
				/>

				<TextField
					className={classes.input}
					inputRef={register({
						required: 'Required',
					})}
					fullWidth={true}
					defaultValue={friend.email}
					variant='outlined'
					type='email'
					id='email'
					name='email'
					label='Email:'
					error={errors.email ? true : false}
					helperText={errors.email ? errors.email.message : null}
				/>

				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					disabled={!formState.isValid}
					className={classes.button}
				>
					Submit
				</Button>
			</Box>
		</Dialog>
	);
}
