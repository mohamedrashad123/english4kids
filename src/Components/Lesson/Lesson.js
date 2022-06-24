import { Button, Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import ProgressRange from '../ProgressRange/ProgressRange';
import { SpeakIcon, SuccessSvg } from '../svg';
import AnswersList from './answerslist/AnswersList';
import LessonContent from './Content/LessonContent';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import classes from './Lesson.module.css';
import clsx from 'clsx';
import lessonController from '../../controllers/lessonController';
import { cdnLink } from '../../constant/const';
import quizController from '../../controllers/quizController';
import failIconSvg from './failedsvg.svg';
import { useParams } from 'react-router-dom';

function Lesson() {
	const { lessonId } = useParams();
	const [lessonDetails, setLessonDetails] = useState(null);
	const [content, setContent] = useState(null);
	const [nextQuestion, setNextQuestion] = useState(null);
	const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
	const [quizReport, setQuizReport] = useState(null);

	const getLessonData = async () => {
		const lessonData = await lessonController.getDetails(lessonId);
		if (lessonData) {
			setLessonDetails(lessonData);
			setContent({
				content: lessonData?.description || '',
				grammarImages: lessonData?.grammar_images?.split(',') || [],
				wordsImages: lessonData?.words_images?.split(',') || [],
				wordsInfo: lessonData?.words_info || '',
				image: lessonData?.image || '',
			});
		} else setLessonDetails(null);
	};

	const createSpeech = (text) => {
		const speech = new SpeechSynthesisUtterance();
		speech.lang = 'en';
		speech.text = text;

		const voices = window.speechSynthesis.getVoices();
		speech.voice = voices[1];
		window.speechSynthesis.speak(speech);
	};

	const createQuiz = async () => {
		const questions = lessonDetails?.questions.map((question) => {
			const correctAnswerId = question.answers.find((ans) => ans.isCorrect)?.ID;
			return { questionId: question.ID, answerId: correctAnswerId };
		});

		const quizReport = await quizController.createQuiz(lessonId, 1, questions);
		setQuizReport(quizReport);
	};

	const changeQuestion = (e, dir) => {
		setNextQuestion(lessonDetails?.questions[nextQuestionIndex]);

		if (e && lessonDetails?.questions?.length > nextQuestionIndex && dir === 'next') setNextQuestionIndex(nextQuestionIndex + 1);
		else if (e && lessonDetails?.questions?.length - 1 >= nextQuestionIndex && nextQuestionIndex > 0 && dir === 'prev')
			setNextQuestionIndex(nextQuestionIndex - 1);
		else if (lessonDetails?.questions?.length - 1 === nextQuestionIndex) createQuiz();
	};

	useEffect(() => {
		getLessonData();
	}, []);

	useEffect(() => {
		changeQuestion();
	}, [lessonDetails, nextQuestionIndex]);

	const changeSelectedAnswer = (index) => {
		const answersClone = [...lessonDetails?.questions[nextQuestionIndex]?.answers];
		answersClone[index].isCorrect = true;
		answersClone.forEach((answer, i) => (index !== i ? (answer.isCorrect = false) : null));
		const currentQuestion = { ...lessonDetails?.questions[nextQuestionIndex], answers: answersClone };

		const questionsClone = [...lessonDetails?.questions];
		questionsClone.fill(currentQuestion, nextQuestionIndex, nextQuestionIndex + 1);

		setLessonDetails({
			...lessonDetails,
			questions: questionsClone,
		});
	};

	const finishQuiz = () => {
		if (!quizReport.success) {
			getLessonData();
			setNextQuestionIndex(0);
			setNextQuestion(null);
			setQuizReport(null);
		}
	};

	return (
		<div className={classes.lesson}>
			<Grid container justifyContent="space-around">
				<Grid item sx={12} md={6}>
					<h2 className={(clsx('h2'), classes.lessonTitle)}>{lessonDetails?.title || ''}</h2>
					<object
						className={classes.video}
						controls
						height="467"
						data={`${lessonDetails?.video}` + `?rel=0&modestbranding=1&fs=0&showinfo=0&color=white&controls=0`}
					></object>
					<LessonContent lessonData={content || {}} />
				</Grid>
				<Grid item sx={12} md={4}>
					<div style={{ width: '83%' }}>
						<ProgressRange
							baseheight={10}
							barheight="16px"
							barbackground="#6E41E2"
							value={lessonDetails?.questions?.length - 1 >= nextQuestionIndex ? nextQuestionIndex + 1 : nextQuestionIndex}
							max={lessonDetails?.questions?.length || 10}
							withLabel={true}
						/>
					</div>
					<div>
						{!quizReport || (lessonDetails && lessonDetails?.questions?.length - 1 >= nextQuestionIndex) ? (
							<>
								<div className="questionTitle ps-4">
									<h6 className="h6 mt-5" style={{ width: '65%' }}>
										{nextQuestion?.title || ''}
									</h6>
									<Box
										onClick={() => createSpeech(nextQuestion?.title)}
										sx={{
											width: 84,
											padding: '3px 8px',
											textAlign: 'center',
											backgroundColor: 'rgba(110, 65, 226, 0.1)',
											borderRadius: '1px',
											color: '#6E41E2',
											cursor: 'pointer',
										}}
									>
										<SpeakIcon color="#6E41E2" />
										<span style={{ marginLeft: '5px' }}>Speak</span>
									</Box>
									{nextQuestion?.image ? (
										<img
											className={classes.questionImage}
											height={400}
											width={400}
											src={`${cdnLink}/question/${nextQuestion?.image || ''}`}
											alt="question image"
										/>
									) : null}
								</div>
								<div className="questions ps-4">
									<AnswersList
										answers={lessonDetails?.questions[nextQuestionIndex]?.answers}
										changeSelectedAnswer={changeSelectedAnswer}
										createSpeech={createSpeech}
									/>
								</div>
							</>
						) : quizReport?.success ? (
							<SuccessSvg className="text-center" />
						) : (
							<img src={failIconSvg} />
						)}
					</div>
					<div>
						<Stack
							className="ps-4 mt-4"
							style={{ width: '81%' }}
							direction={{ sm: 'row', xs: 'column' }}
							spacing={4}
							justifyContent="center"
							alignItems="center"
						>
							{!quizReport || (lessonDetails && lessonDetails?.questions?.length - 1 >= nextQuestionIndex) ? (
								<>
									<Button onClick={(e) => changeQuestion(e, 'prev')} startIcon={<ChevronLeftOutlinedIcon />} className="primary_text">
										Back
									</Button>
									<Button
										onClick={(e) => changeQuestion(e, 'next')}
										endIcon={<ChevronRightOutlinedIcon />}
										variant="contained"
										className="primaryButton"
									>
										Next Question
									</Button>
								</>
							) : (
								<>
									<div>
										<div className="d-flex justify-content-between align-items-start gap-5">
											<div>
												<h4 className={clsx('h4', quizReport?.success ? 'primary_text' : 'secondry_text')}>
													{quizReport?.success ? 'Amazing!' : 'Failed!'}
												</h4>
												<p className="primary_text text-right">Your scored</p>
											</div>
											<h6 className="h5">
												<span className={quizReport?.success ? 'primary_text' : 'secondry_text'}>{quizReport?.correctQuestions || 0}</span>
												<hr style={{ margin: '8px 0', width: '100%', color: '#000' }} />
												<small style={{ color: '#8a8a8a' }}>{quizReport?.allQuestions || 0}</small>
											</h6>
										</div>
										<Button
											onClick={() => finishQuiz()}
											endIcon={quizReport?.success ? <ChevronRightOutlinedIcon /> : null}
											variant="contained"
											className="primaryButton"
										>
											{quizReport?.success ? 'Next Lesson' : 'Try Again'}
										</Button>
									</div>
								</>
							)}
						</Stack>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Lesson;
