import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Lesson from './Components/Lesson/Lesson';
import Navbar from './Components/navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container-fluid">
				<Routes>
					<Route path="/">
						<Route path="lessons">
							<Route path=":lessonId" element={<Lesson />}></Route>
						</Route>

						<Route index element={<Home />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
