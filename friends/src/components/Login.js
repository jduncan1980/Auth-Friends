import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Grid as Box,
	TextField,
	Button,
	makeStyles,
	Typography,
	CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	container: {
		padding: '5%',
		width: '30%',
		background: 'white',
		borderRadius: '20px',
		transform: 'translateY(100%)',
		margin: '0 auto',
	},
	field: {
		margin: '20px auto',
	},
});

export default function Login({ setChecked }) {
	const history = useHistory();
	const classes = useStyles();
	const { handleSubmit, register, errors, formState } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		axios
			.post('http://localhost:5000/api/login', data)
			.then((res) => {
				console.log(res.data.payload);
				localStorage.setItem('authToken', res.data.payload);
				setChecked(true);
				history.push('/friends');
			})
			.catch((err) => {
				console.error(err.message);
				localStorage.removeItem('authToken');
				alert(`Something Went Wrong! Please Try Again!`);
			});
	};

	if (formState.isSubmitting) {
		return (
			<Box className={classes.container}>
				<Typography>Loading...</Typography>
				<CircularProgress color='secondary' />
			</Box>
		);
	}

	return (
		<Box
			className={classes.container}
			component='form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				fullWidth={true}
				className={classes.field}
				autoFocus
				variant='outlined'
				type='text'
				id='username'
				name='username'
				inputRef={register({ required: 'Required' })}
				label='Username:'
				error={errors.username ? true : false}
				helperText={errors.username ? errors.username.message : null}
			/>

			<TextField
				fullWidth={true}
				className={classes.field}
				inputRef={register({
					required: 'Required',
				})}
				variant='outlined'
				type='password'
				id='password'
				name='password'
				label='Password:'
				error={errors.password ? true : false}
				helperText={errors.password ? errors.password.message : null}
			/>

			<Button
				fullWidth
				variant='contained'
				color='primary'
				size='large'
				type='submit'
				disabled={!formState.isValid}
			>
				Login
			</Button>
		</Box>
	);
}
