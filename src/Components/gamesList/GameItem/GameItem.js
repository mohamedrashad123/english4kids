import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import gameImage from './gameImage.svg';
import classes from './GameItem.module.css';

function GameItem({ game }) {
	const style = {
		boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
		borderRadius: '8px',
		background: '#6E41E2',
		color: '#ffffff',
		padding: '8px',
	};

	return (
		<Card sx={{ display: 'flex' }} style={style}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						Pick the letter
					</Typography>
					<Typography variant="text" component="div" style={{ width: '75%' }}>
						In this game, you have to choose the correct letter to complete the word
					</Typography>
				</CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} style={{ marginTop: '18px' }}>
					<Button variant="contained" className="secondryButton">
						Play the game
					</Button>
				</Box>
			</Box>
			<CardMedia className={classes.gameImage} component="img" sx={{ width: 151 }} image={gameImage} alt="game" />
		</Card>
	);
}

export default GameItem;
