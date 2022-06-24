import { Button, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import classes from './guessWord.module.css';

function GuessWord({ game, success: Success, backToHome, storeGameState }) {
	const [charsList, setCharsList] = useState([]);
	const [step, setStep] = useState(0);

	const addChar = (char) => {
		if (game.id === 2) {
			const charsClone = [...game.steps[step].chars];
			const charIndex = charsClone.findIndex((item) => item === char);
			game.steps[step].chars.splice(charIndex, 1);
		}

		setCharsList((oldCharList) => {
			if (game.steps[step].word.length > oldCharList.length) {
				return [...oldCharList, char];
			} else {
				return oldCharList;
			}
		});
	};

	const removeChar = (char) => {
		const gameChars = JSON.parse(localStorage.getItem('charslist'));
		const charIndex = gameChars.findIndex((item) => char.toLocaleLowerCase() === item.toLocaleLowerCase());
		const charListClone = [...charsList];
		const oldGameChars = [...game.steps[step].chars];

		setCharsList(charListClone.filter((item) => item.toLocaleLowerCase() !== char.toLocaleLowerCase()));
		oldGameChars.splice(charIndex, 0, char);

		game.steps[step].chars = oldGameChars;
	};

	useEffect(() => {
		const charsClone = [...game.steps[step].chars];
		const gameHistory = JSON.parse(localStorage.getItem('game'));
		localStorage.setItem('charslist', JSON.stringify(charsClone));
		if (gameHistory && gameHistory.id === game.id) {
			if (gameHistory.step) setStep(gameHistory.step);
		}
	}, []);

	useEffect(() => {
		if (step === game.steps.length)
			return () => {
				setCharsList([]);
				setStep(0);
			};
		if (game.steps[step].word.length === charsList.length) {
			if (charsList.join('').toLocaleLowerCase() === game.steps[step].word.toLocaleLowerCase()) {
				setStep((oldStep) => {
					const charsClone = [...game.steps[oldStep + 1].chars];
					localStorage.setItem('charslist', JSON.stringify(charsClone));
					return oldStep + 1;
				});

				storeGameState({ id: game.id, step: step + 1 });
				setCharsList([]);
			} else {
				game.steps[step].chars = JSON.parse(localStorage.getItem('charslist'));
				setCharsList([]);
			}
		}
	}, [charsList.length]);

	return (
		<div>
			{step === game.steps.length ? (
				<Success />
			) : (
				<Stack justifyContent="center" alignItems="center">
					<Button className="primaryButton mb-4 align-self-start ms-5" variant="outlined" onClick={backToHome}>
						Home Page
					</Button>
					<Typography component="div" variant="h3" className="h3 mb-5">
						{game.title}
					</Typography>

					<ImageListItem className={clsx('imageItem')}>
						<img
							src={`${game.steps[step].image}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${game.steps[step].image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={game.title}
							loading="lazy"
						/>
					</ImageListItem>
					{game.id === 3 ? (
						<Typography component="div" variant="h3" className="h3 my-5">
							{game.steps[step].question}
						</Typography>
					) : (
						<ImageList
							sx={{ width: 500 }}
							style={{ gridTemplateColumns: `repeat(${game.steps[step].word.length}, 1fr)` }}
							cols={3}
							rowHeight={164}
							className={clsx('my-5', classes.imageList)}
						>
							{game.steps[step].word.split('').map((char, i) => {
								return (
									<li className={classes.item} key={i} onClick={() => removeChar(charsList[i])}>
										<Typography component="div" variant="h4" className="h4">
											{charsList[i]}
										</Typography>
									</li>
								);
							})}
						</ImageList>
					)}
					<ImageList
						sx={{ width: 800, height: 450 }}
						style={{ gridTemplateColumns: `repeat(${game.steps[step].chars.length}, 1fr)` }}
						cols={5}
						rowHeight={164}
						className={clsx(classes.imageList, classes.selectionImageList)}
					>
						{game.steps[step].chars.map((char, i) => (
							<li key={i} className={clsx(classes.item, classes.selectionItem)} onClick={() => addChar(char)}>
								<Typography component="div" variant="h1" className="h1">
									{char}
								</Typography>
							</li>
						))}
					</ImageList>
				</Stack>
			)}
		</div>
	);
}

export default GuessWord;
