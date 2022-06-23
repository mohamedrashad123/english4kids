import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import classes from './customCaoursel.module.css';

export default ({ children }) => {
	return (
		<Swiper
			className={classes.CustomSwiper}
			spaceBetween={30}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{children}
		</Swiper>
	);
};
