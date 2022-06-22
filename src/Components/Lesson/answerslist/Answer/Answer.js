import React from 'react';
import { Typography } from '@mui/material';
import { SpeakIcon } from '../../../svg';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import classes from './ansewer.module.css';
import clsx from 'clsx';

function Answer({ answer, onClick, createSpeech }) {
	return (
		<div className={clsx(classes.Answer, answer.isCorrect ? classes.selectedAnswer : '')} onClick={onClick}>
			<div className="answerTitle">
				<CheckBoxOutlinedIcon className={clsx(classes.checkBoxIcon, answer.isCorrect ? classes.selectedBoxIcon : '')} />
				<Typography variant="text">{answer?.title || 'answer'}</Typography>
			</div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					createSpeech(answer.title);
				}}
				style={{ zIndex: 50000, border: 0, background: 'none' }}
			>
				<SpeakIcon color={answer.isCorrect ? '#FFFFFF' : '#6E41E2'} />
			</button>
		</div>
	);
}

export default Answer;
