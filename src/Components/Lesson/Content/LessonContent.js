import { Box, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { AboutLessonIcon, LessonWordsIcon } from '../../svg';
import classes from './LessonContent.module.css';
import Stack from '@mui/material/Stack';
import { cdnLink } from '../../../constant/const';

function LessonContent({ lessonData }) {
	const [activeTab, setActiveTab] = useState('lessonTab');
	const { content, grammarImages, wordsImages, wordsInfo, image } = lessonData;

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12} sm={3} md={4} lg={3} xl={2}>
				<Stack direction={{ xs: 'row', sm: 'column' }} spacing={3}>
					<Box onClick={() => setActiveTab('lessonTab')}>
						<AboutLessonIcon isActive={activeTab === 'lessonTab'} />
					</Box>
					<Box onClick={() => setActiveTab('wordsTab')}>
						<LessonWordsIcon isActive={activeTab === 'wordsTab'} />
					</Box>
				</Stack>
			</Grid>
			<Grid item xs={12} sm={9} md={8} lg={9} xl={10}>
				<Typography variant="h6">{activeTab === 'lessonTab' ? 'About Lesson' : 'Lesson words'}</Typography>
				<div className={classes.info}>
					{activeTab === 'lessonTab' ? (
						<>
							<img style={{ display: 'block', margin: '17px 0', width: '80%' }} src={`${cdnLink}/lessons/${image}`} alt="lesson image" />
							<p style={{ width: '80%' }}>{content || ''}</p>
							{grammarImages?.length
								? grammarImages.map((image, i) => (
										<img
											key={i}
											style={{ display: 'block', margin: '17px 0', width: '80%' }}
											src={`${cdnLink}/grammar/${image}`}
											alt="lesson grammar"
										/>
								  ))
								: null}
						</>
					) : (
						<>
							{wordsInfo ? wordsInfo : ''}
							{wordsImages?.length
								? wordsImages.map((image, i) => (
										<img key={i} style={{ display: 'block', margin: '17px 0', width: '80%' }} src={`${cdnLink}/word/${image}`} alt="lesson words" />
								  ))
								: null}
						</>
					)}
				</div>
			</Grid>
		</Grid>
	);
}

export default LessonContent;
