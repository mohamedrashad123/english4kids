import React from 'react';
import { BenIcon } from '../../svg';
import Card from '@mui/material/Card';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import classes from './LessonItem.module.css';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardContent } from '@material-ui/core';
import YouTubeIcon from '@mui/icons-material/YouTube';
import lessonController from '../../../controllers/lessonController';
import { useNavigate } from 'react-router-dom';

function LessonItem({ lesson }) {
	const navigate = useNavigate();
	const userId = 1;
	const style = {
		boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
		borderRadius: '8px',
		background: '#ffffff',
	};

	const subscribeLesson = async (lessonId) => {
		const result = await lessonController.subscribeLesson(lessonId, userId);
		if (result) navigate(`/lessons/${lesson.ID}`);
	};

	return (
		<div>
			<Card style={style} sx={{ maxWidth: '100%', textAlign: 'left', position: 'relative' }}>
				<CardActionArea>
					<CardMedia component="img" height="140" image={lesson.image} alt={lesson.title} />
				</CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{lesson.title}
					</Typography>

					<div className="d-flex justify-content-between align-self-center gap-3" style={{ width: '55%' }}>
						<span>
							<YouTubeIcon style={{ color: '#6E41E2' }} /> {lesson.videoMinutes} minutes
						</span>
						<span>
							<BenIcon color="#6E41E2" /> {lesson.questionsCount} tasks
						</span>
					</div>
				</CardContent>
				<div className={classes.cardBottom}>
					<Stack className="text-center" spacing={3} direction={{ xs: 'column', xl: 'row' }} justifyContent="flex-start">
						<Button style={{ padding: '10px 20px' }} variant="contained" className="primaryButton" onClick={() => subscribeLesson(lesson.ID)}>
							Start Learning
						</Button>
						<Button size="small" style={{ color: '#6E41E2' }}>
							Take A Test
						</Button>
					</Stack>
				</div>
			</Card>
		</div>
	);
}

export default LessonItem;
