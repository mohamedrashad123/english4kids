import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import authService from '../../controllers/checkIfAutorized';

function RouteGuard({ children }) {
	const location = useLocation();
	const [authorized, setAuthorized] = useState(false);

	function authCheck(url) {
		const isAuthorized = authService.checkIfAuthorized();

		if (isAuthorized) location.pathname = '/';
		if (!isAuthorized) {
			location.pathname = '/auth';
		} else {
			setAuthorized(true);
		}
	}

	return authorized && children;
}

export { RouteGuard };
