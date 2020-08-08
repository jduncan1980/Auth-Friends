import React from 'react';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import {
	Grid,
	TextField,
	Typography,
	Button,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		paddingTop: '10%',
		height: '20%',
		paddingBottom: '5%',
	},
	heading: {
		fontSize: '3rem',
		marginTop: '4rem',
	},
});

export default function AddFriendForm({ setFriends }) {
	const classes = useStyles();
	const { handleSubmit, register, errors, formState } = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		// console.log(data);
		axiosWithAuth()
			.post('friends', data)
			.then((res) => {
				console.log(res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.error(err.message);
				alert(`Something Went Wrong! Please Try Again!`);
			});
	};

	return (
		<React.Fragment>
			<Typography align='center' className={classes.heading}>
				Add A Friend!
			</Typography>
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
		</React.Fragment>
	);
}
