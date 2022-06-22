import React from 'react';
import CustomCarousel from '../carousel/customCarousel';
import { SwiperSlide } from 'swiper/react';
import GameItem from './GameItem/GameItem';

const games = [
	{ ID: 2, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 1, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 3, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 4, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 5, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 6, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
	{ ID: 7, title: 'How to spell fruts name correctly?', videoMinutes: 12, questionsCount: 7, image: '' },
];

function GamesList() {
	return (
		<div>
			<CustomCarousel>
				{games.length
					? games.map((game, i) => (
							<SwiperSlide key={i} className="swiperItem">
								<GameItem game={game} />
							</SwiperSlide>
					  ))
					: null}
			</CustomCarousel>
		</div>
	);
}

export default GamesList;
