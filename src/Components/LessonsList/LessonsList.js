import React, { useEffect, useState } from 'react';
import CustomCarousel from '../carousel/customCarousel';
import { SwiperSlide } from 'swiper/react';
import LessonItem from './lessonItem/LessonItem';
import lessonController from '../../controllers/lessonController';

const lessons = [
	{ ID: 2, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 1, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 3, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 4, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 5, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 6, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 7, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
];

function LessonsList({ gradeId = '', unitId = '', search = '' }) {
	const [lessons, setLessons] = useState([]);

	const getListOfLessons = async () => {
		const lessons = await lessonController.getListOfLessons(gradeId, unitId, search);
		setLessons(lessons);
	};

	useEffect(() => {
		getListOfLessons();
	}, [unitId, search]);

	return (
		<div>
			<CustomCarousel>
				{lessons.length
					? lessons.map((lesson, i) => (
							<SwiperSlide key={i} className="swiperItem">
								<LessonItem lesson={lesson} />
							</SwiperSlide>
					  ))
					: null}
			</CustomCarousel>
		</div>
	);
}

export default LessonsList;
