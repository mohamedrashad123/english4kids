import React, { useEffect } from 'react';
import classes from './successCover.module.css';
import { Button, Stack, Typography } from '@mui/material';
import { SuccessSvg } from '../../svg';

function SuccessCover({ backToHome }) {
	useEffect(() => {
		localStorage.removeItem('game');
	}, []);

	return (
		<div className={classes.container}>
			<Stack direction="column" justifyContent="center" alignItems="center" className="text-center">
				<SuccessSvg />
				<Typography component="div" variant="h2" className="h2 primary_text mt-5">
					Amazing!
				</Typography>
				<Typography component="div" variant="h5" className="h5 primary_text">
					well done
				</Typography>
				<Button className="primaryButton mt-5" variant="outlined" onClick={backToHome}>
					Home Page
				</Button>
			</Stack>
		</div>
	);
}

export default SuccessCover;
