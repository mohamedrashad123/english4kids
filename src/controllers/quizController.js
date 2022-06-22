import { postData } from '../constant/axiosClon';

const baseRoute = '/quizes';
export default {
	createQuiz: async (lessonId, userId, questions) => {
		try {
			const quizBody = {
				lessonId,
				userId,
				questions,
			};

			const {
				data: { statusCode, quizReport },
			} = await postData(`${baseRoute}`, quizBody);

			if (statusCode === 200) return quizReport;
			else return null;
		} catch (err) {
			console.log(err);
			return null;
		}
	},
};
