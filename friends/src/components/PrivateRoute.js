import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...props }) {
	return (
		<Route
			{...props}
			render={(props) => {
				if (localStorage.getItem('token')) {
					return <Component {...props} />;
				} else {
					return <Redirect to='/' />;
				}
			}}
		></Route>
	);
}
