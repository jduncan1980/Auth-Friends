import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Grid,
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
		paddingTop: '10%',
		height: '20%',
	},
});

export default function Login({ setChecked }) {
	const history = useHistory();
	const classes = useStyles();
	const { handleSubmit, register, errors, formState } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		// console.log(data);
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
			<React.Fragment>
				<Typography>Loading...</Typography>
				<CircularProgress color='secondary' />
			</React.Fragment>
		);
	}

	return (
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
					id='username'
					name='username'
					inputRef={register({ required: 'Required' })}
					label='Username:'
					error={errors.username ? true : false}
					helperText={errors.username ? errors.username.message : null}
				/>
			</Grid>

			<Grid item>
				<TextField
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
			</Grid>

			<Grid item>
				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					disabled={!formState.isValid}
				>
					Login
				</Button>
			</Grid>
		</Grid>
	);
}
