import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomizedProgressBars from '../../ProgressRange/ProgressRange';
import classes from './startCover.module.css';

function StartCover({ setStartGame, gameTitle }) {
	const [progress, setProgress] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress, currentProgress) => {
				if (currentProgress === 10) {
					return 1;
				}
				const diff = Math.random() * 5;
				return Math.min(oldProgress + diff, 10);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Stack alignItems="center" justifyContent="space-between" className={classes.container}>
			<Typography component="div" variant="h2" className="primary_text h2 mt-5">
				{gameTitle}
			</Typography>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<CustomizedProgressBars
					baseheight={10}
					barheight="16px"
					barbackground="#6E41E2"
					value={progress}
					max={10}
					containerClassName={classes.rangeInput}
					width={100}
				/>

				{progress === 10 ? (
					<Button
						onClick={() => setStartGame(true)}
						variant="outlined"
						className="primaryButton"
						style={{ width: '148px', margin: 'auto', marginTop: '30px' }}
					>
						Start the Game
					</Button>
				) : null}
			</div>
		</Stack>
	);
}

export default StartCover;
