import { Button, IconButton, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { GameSpeakIcon } from '../../svg';
import classes from './selectGame.module.css';

function SelectGame({ game, createSpeech, success: Success, backToHome, storeGameState }) {
	const [image, setImage] = useState(null);
	const [step, setStep] = useState(0);

	const changeImage = (index, isCorrect) => {
		setImage(index);
		if (isCorrect) {
			storeGameState({ id: game.id, step: step + 1 });
			setStep(step + 1);
			setImage(null);
		}
	};

	useEffect(() => {
		const gameHistory = JSON.parse(localStorage.getItem('game'));
		if (gameHistory && gameHistory.id === game.id) {
			if (gameHistory.step) setStep(gameHistory.step);
		}
	}, []);

	return (
		<div>
			{step === game.steps.length ? (
				<Success />
			) : (
				<Stack justifyContent="center" alignItems="center">
					<Button className="primaryButton mb-4 align-self-start ms-5" variant="outlined" onClick={backToHome}>
						Home Page
					</Button>
					<Typography component="div" variant="h3" className="h3">
						{game.title}
					</Typography>
					{game.id === 4 ? (
						<>
							<Typography style={{ margin: '40px 0', fontSize: '7rem', fontWeight: '400' }} component="div" variant="h1" className="h1">
								{game.steps[step].word}
							</Typography>
							<Typography component="div" variant="h5" className="h5 mb-5">
								Guess the color
							</Typography>
						</>
					) : (
						<Typography style={{ margin: '60px 0' }} component="div" variant="text" className="primary_text">
							<IconButton onClick={() => createSpeech(game.steps[step].word)}>
								<GameSpeakIcon color="#6E41E2" />
							</IconButton>
							<Typography component="p" variant="text">
								TAP TO LISTEN AGAIN
							</Typography>
						</Typography>
					)}
					<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} className={classes.imageList}>
						{game.steps[step].images.map((item, i) =>
							game.id === 4 ? (
								<ImageListItem
									onClick={() => changeImage(i, item.isCorrect)}
									key={item.color}
									style={{ background: item.color }}
									className={clsx('colorItem', image !== null && image === i && (item.isCorrect ? 'correct' : 'wrong'))}
								></ImageListItem>
							) : (
								<ImageListItem
									onClick={() => changeImage(i, item.isCorrect)}
									key={item.url}
									className={clsx('imageItem', image !== null && image === i && (item.isCorrect ? 'correct' : 'wrong'))}
								>
									<img
										src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
										srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
										alt={item.title}
										loading="lazy"
									/>
								</ImageListItem>
							)
						)}
					</ImageList>
				</Stack>
			)}
		</div>
	);
}

export default SelectGame;
