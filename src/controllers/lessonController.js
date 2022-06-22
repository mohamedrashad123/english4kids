import { getData, postData } from '../constant/axiosClon';
import { cdnLink } from '../constant/const';

export default {
	getDetails: async (lessonId) => {
		const {
			data: { lesson_details, statusCode },
		} = await getData(`/lessons/${lessonId}`);

		if (statusCode === 200) return lesson_details;
		return null;
	},
	getListOfLessons: async (gradeId = '', unitId = '', search = '') => {
		const {
			data: { lessons, statusCode },
		} = await getData(`/lessons?gradeId=${gradeId}&unitId=${unitId}&search=${search}`);

		if (statusCode === 200)
			return lessons.map((lesson) => {
				return { ...lesson, videoMinutes: 18, image: `${cdnLink}/lessons/${lesson.image}` };
			});
		return [];
	},
	subscribeLesson: async (lessonId, userId) => {
		const lessonHistoryBody = { userId };

		const {
			data: { statusCode, lessonHistoryId },
		} = await postData(`/lessons/${lessonId}/subscribe`, lessonHistoryBody);

		if (statusCode === 200 && lessonHistoryId) return true;
		return false;
	},
};
