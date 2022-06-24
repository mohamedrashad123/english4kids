import React from 'react';
import CustomCarousel from '../carousel/customCarousel';
import { SwiperSlide } from 'swiper/react';
import GameItem from './GameItem/GameItem';
import { cdnLink } from '../../constant/const';

const baseLink = `${cdnLink}/games/`;
const games = [
	{
		id: 1,
		title: 'Listen & Select',
		steps: [
			{
				word: 'rabbit',
				images: [
					{ url: `${baseLink}/316881508792.png`, isCorrect: false },
					{ url: `${baseLink}/1388164361191.png`, isCorrect: true },
					{ url: `${baseLink}/374448145046.png`, isCorrect: false },
					{ url: `${baseLink}/263694125625.png`, isCorrect: false },
				],
			},
			{
				word: 'nurse',
				images: [
					{ url: `${baseLink}/1538884351982.png`, isCorrect: true },
					{ url: `${baseLink}/295232983502.png`, isCorrect: false },
					{ url: `${baseLink}/1234797717475.png`, isCorrect: false },
					{ url: `${baseLink}/1064786061582.png`, isCorrect: false },
				],
			},
			{
				word: 'apple',
				images: [
					{ url: `${baseLink}/1325649457163.png`, isCorrect: false },
					{ url: `${baseLink}/624965405021.png`, isCorrect: true },
					{ url: `${baseLink}/894095536597.png`, isCorrect: false },
					{ url: `${baseLink}/1160756959047.png`, isCorrect: false },
				],
			},
			{
				word: 'face',
				images: [
					{ url: `${baseLink}/1438611678139.png`, isCorrect: false },
					{ url: `${baseLink}/460919488013.png`, isCorrect: false },
					{ url: `${baseLink}/1009786074033.png`, isCorrect: false },
					{ url: `${baseLink}/1183113388163.png`, isCorrect: true },
				],
			},
			{
				word: 'short pants',
				images: [
					{ url: `${baseLink}/50591755859.png`, isCorrect: false },
					{ url: `${baseLink}/1158257656796.png`, isCorrect: false },
					{ url: `${baseLink}/854489438372.png`, isCorrect: true },
					{ url: `${baseLink}/1531579656274.png`, isCorrect: false },
				],
			},
			{
				word: 'pizza',
				images: [
					{ url: `${baseLink}/934220967131.png`, isCorrect: false },
					{ url: `${baseLink}/1282721396873.png`, isCorrect: false },
					{ url: `${baseLink}/448593865659.png`, isCorrect: true },
					{ url: `${baseLink}/1435878834965.png`, isCorrect: false },
				],
			},
			{
				word: 'sun',
				images: [
					{ url: `${baseLink}/1010738009322.png`, isCorrect: true },
					{ url: `${baseLink}/424480196102.png`, isCorrect: false },
					{ url: `${baseLink}/675422997263.png`, isCorrect: false },
					{ url: `${baseLink}/82109251702.png`, isCorrect: false },
				],
			},
			{
				word: 'window',
				images: [
					{ url: `${baseLink}/1427149983052.png`, isCorrect: false },
					{ url: `${baseLink}/1179884864009.png`, isCorrect: true },
					{ url: `${baseLink}/1573516831354.png`, isCorrect: false },
					{ url: `${baseLink}/159354986110.png`, isCorrect: false },
				],
			},
			{
				word: 'blue',
				images: [
					{ url: `${baseLink}/1058099640644.png`, isCorrect: false },
					{ url: `${baseLink}/1236024390999.png`, isCorrect: false },
					{ url: `${baseLink}/1652089861113.png`, isCorrect: false },
					{ url: `${baseLink}/553374640867.png`, isCorrect: true },
				],
			},
			{
				word: 'summer',
				images: [
					{ url: `${baseLink}/415259313433.png`, isCorrect: false },
					{ url: `${baseLink}/380119676096.png`, isCorrect: true },
					{ url: `${baseLink}/1109800940949.png`, isCorrect: false },
					{ url: `${baseLink}/772498032042.png`, isCorrect: false },
				],
			},
			{
				word: 'temple',
				images: [
					{ url: `${baseLink}/874283459486.png`, isCorrect: false },
					{ url: `${baseLink}/1479996401602.png`, isCorrect: false },
					{ url: `${baseLink}/1487454649877.png`, isCorrect: false },
					{ url: `${baseLink}/568894323360.png`, isCorrect: true },
				],
			},
		],
	},
	{
		id: 2,
		title: 'Guess the word',
		steps: [
			{
				word: 'bed',
				image: `${baseLink}/717591451275.png`,
				chars: ['C', 'B', 'T', 'D', 'E'],
			},
			{
				word: 'vet',
				image: `${baseLink}/1609293175104.png`,
				chars: ['V', 'B', 'T', 'D', 'E'],
			},
			{
				word: 'egg',
				image: `${baseLink}/1103864303211.png`,
				chars: ['E', 'B', 'D', 'G', 'G'],
			},
			{
				word: 'exit',
				image: `${baseLink}/964643077144.png`,
				chars: ['E', 'T', 'X', 'D', 'I'],
			},
			{
				word: 'ten',
				image: `${baseLink}/1615771782399.png`,
				chars: ['E', 'T', 'X', 'N', 'I'],
			},
			{
				word: 'bread',
				image: `${baseLink}/1191403719468.png`,
				chars: ['B', 'E', 'R', 'D', 'A'],
			},
			{
				word: 'cat',
				image: `${baseLink}/726288457493.png`,
				chars: ['C', 'T', 'X', 'N', 'A'],
			},
			{
				word: 'rain',
				image: `${baseLink}/806520902079.png`,
				chars: ['I', 'N', 'R', 'Y', 'A'],
			},
			{
				word: 'wind',
				image: `${baseLink}/1294011484442.png`,
				chars: ['W', 'N', 'I', 'D', 'Y'],
			},
			{
				word: 'watch',
				image: `${baseLink}/1318098519085.png`,
				chars: ['W', 'C', 'A', 'H', 'T'],
			},
			{
				word: 'map',
				image: `${baseLink}/72898860590.png`,
				chars: ['M', 'T', 'P', 'N', 'A'],
			},
			{
				word: 'green',
				image: `${baseLink}/1643217393012.png`,
				chars: ['E', 'G', 'E', 'R', 'N'],
			},
			{
				word: 'fall',
				image: `${baseLink}/974867004323.png`,
				chars: ['F', 'L', 'E', 'L', 'A'],
			},
			{
				word: 'giza',
				image: `${baseLink}/60848109532.png`,
				chars: ['G', 'Z', 'I', 'L', 'A'],
			},
		],
	},
	{
		id: 3,
		title: 'Let’s Count',
		steps: [
			{
				word: '4',
				question: 'How many apples?',
				image: `${baseLink}/689388448133.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '2',
				question: 'How many camels?',
				image: `${baseLink}/1601304666098.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '3',
				question: 'How many eggs?',
				image: `${baseLink}/135231014268.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '4',
				question: 'How many lemons?',
				image: `${baseLink}/1234552511569.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '4',
				question: 'How many colors?',
				image: `${baseLink}/552682438863.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '4',
				question: 'How many windows?',
				image: `${baseLink}/506114882948.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '2',
				question: 'How many sunglasses?',
				image: `${baseLink}/178694921482.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '3',
				question: 'How many hats?',
				image: `${baseLink}/1655409831696.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '5',
				question: 'How many jackets?',
				image: `${baseLink}/1349165877526.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '3',
				question: 'How many socks?',
				image: `${baseLink}/229090236802.png`,
				chars: ['2', '4', '3', '5'],
			},
			{
				word: '1',
				question: 'How many vans?',
				image: `${baseLink}/1517653496225.png`,
				chars: ['2', '1', '3', '5'],
			},
		],
	},
	{
		id: 4,
		title: 'World of colors',
		steps: [
			{
				word: 'GREEN',
				images: [
					{ color: `#FF0000`, isCorrect: false },
					{ color: `#20E200`, isCorrect: true },
					{ color: `#3E00ED`, isCorrect: false },
					{ color: `#FAFF00`, isCorrect: false },
				],
			},
			{
				word: 'BLUE',
				images: [
					{ color: `#FF0000`, isCorrect: false },
					{ color: `#20E200`, isCorrect: false },
					{ color: `#3E00ED`, isCorrect: true },
					{ color: `#FAFF00`, isCorrect: false },
				],
			},
			{
				word: 'RED',
				images: [
					{ color: `#FF0000`, isCorrect: true },
					{ color: `#20E200`, isCorrect: false },
					{ color: `#3E00ED`, isCorrect: false },
					{ color: `#FAFF00`, isCorrect: false },
				],
			},
			{
				word: 'BLACK',
				images: [
					{ color: `#800080`, isCorrect: false },
					{ color: `#FF8000`, isCorrect: false },
					{ color: `#3E00ED`, isCorrect: false },
					{ color: `#000000`, isCorrect: true },
				],
			},
			{
				word: 'WHITE',
				images: [
					{ color: `#FFFFFF`, isCorrect: true },
					{ color: `#FF8000`, isCorrect: false },
					{ color: `#3E00ED`, isCorrect: false },
					{ color: `#000000`, isCorrect: false },
				],
			},
		],
	},
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
