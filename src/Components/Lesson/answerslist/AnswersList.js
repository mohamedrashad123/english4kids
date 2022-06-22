import React from 'react';
import Answer from './Answer/Answer';
import { Typography } from '@mui/material';
import classes from './answerList.module.css';

function AnswersList({ answers, changeSelectedAnswer, createSpeech }) {
	return (
		<div className={classes.answersListContainer}>
			<Typography variant="text">Choose the right answer</Typography>
			<div className={classes.answersList}>
				{answers &&
					answers.map((answer, index) => {
						return <Answer key={index} answer={answer} createSpeech={createSpeech} onClick={() => changeSelectedAnswer(index)} />;
					})}
			</div>
		</div>
	);
}

export default AnswersList;
