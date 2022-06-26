import { postData } from '../constant/axiosClon';

export default {
	signup: async (authData) => {
		try {
			const { data: userData } = await postData('/register', authData);

			if (userData) {
				sessionStorage.setItem('user', JSON.stringify(userData));
				sessionStorage.setItem('token', JSON.stringify(userData.token));
				return true;
			}
			return false;
		} catch (err) {
			console.log(err);
			return false;
		}
	},
	login: async (authData) => {
		try {
			const {
				data: { user },
			} = await postData('/login', authData);

			if (user) {
				sessionStorage.setItem('user', JSON.stringify(user));
				sessionStorage.setItem('token', JSON.stringify(user.token));
				return true;
			}

			return false;
		} catch (err) {
			console.log(err);
			return null;
		}
	},
};
