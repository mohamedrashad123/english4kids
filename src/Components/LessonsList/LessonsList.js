import React, { useEffect, useState } from 'react';
import CustomCarousel from '../carousel/customCarousel';
import { SwiperSlide } from 'swiper/react';
import LessonItem from './lessonItem/LessonItem';
import lessonController from '../../controllers/lessonController';

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
