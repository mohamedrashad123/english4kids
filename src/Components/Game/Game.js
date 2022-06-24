import React, { useState } from 'react';
import SuccessCover from './successCover/SuccessCover';
import GuessWord from './GuessWord/GuessWord';
import SelectGame from './SelectGame/SelectGame';
import StartCover from './startCover/StartCover';
import { useNavigate, useLocation } from 'react-router-dom';

function Game(props) {
	const [startGame, setStartGame] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const {
		state: { game },
	} = location;

	const createSpeech = (text) => {
		const speech = new SpeechSynthesisUtterance();
		speech.lang = 'en';
		speech.text = text;

		const voices = window.speechSynthesis.getVoices();

		// Initially set the First Voice in the Array.
		speech.voice = voices[1];
		window.speechSynthesis.speak(speech);
	};

	const backToHome = () => navigate('/');
	const storeGameState = (history) => {
		localStorage.setItem('game', JSON.stringify(history));
	};

	return (
		<div style={{ width: '100%', background: '#fff', height: 'auto', padding: '50px 0' }}>
			{startGame ? (
				[1, 4].indexOf(game.id) !== -1 ? (
					<SelectGame
						game={game}
						createSpeech={createSpeech}
						success={() => <SuccessCover backToHome={backToHome} />}
						backToHome={backToHome}
						storeGameState={storeGameState}
					/>
				) : [2, 3].indexOf(game.id) !== -1 ? (
					<GuessWord game={game} success={() => <SuccessCover backToHome={backToHome} />} backToHome={backToHome} storeGameState={storeGameState} />
				) : null
			) : (
				<StartCover setStartGame={setStartGame} gameTitle={game.title} />
			)}
		</div>
	);
}

export default Game;
