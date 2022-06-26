import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Lesson from './Components/Lesson/Lesson';
import Navbar from './Components/navbar/Navbar';
import Form from './Components/Form/Form';
import Game from './Components/Game/Game';

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Form /> */}
			<div className="container-fluid">
				{sessionStorage.getItem('token') ? (
					<Routes>
						<Route path="/">
							<Route path="auth" element={<Form />}></Route>
							<Route path="lessons">
								<Route path=":lessonId" element={<Lesson />}></Route>
							</Route>

							<Route path="games">
								<Route path=":gameId" element={<Game />}></Route>
							</Route>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				) : (
					<Form />
				)}
			</div>
		</div>
	);
}

export default App;
