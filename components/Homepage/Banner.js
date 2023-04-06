import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { slideData } from "../sharedPage/StaticData";

const Banner = () => {
	return (
		<div className="video-wrapper text-fontclr  pt-5 pb-5 flex items-center justify-center  ">
			<video autoPlay muted loop>
				<source src="/assets/banner-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="flex items-center justify-center  max-w-7xl mx-auto px-6 lg:px-32 w-full">
				<Swiper
					loop={true}
					// grabCursor={true}
					navigation={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					slidesPerView={1}
					slidesPerGroup={1}
					modules={[Navigation, Autoplay]}
					className="mySwiper"
				>
					{slideData.map((singleData) => (
						<SwiperSlide key={singleData.id}>
							<BannerSlide singleData={singleData} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;

const BannerSlide = ({ singleData }) => {
	const { id, title, desc } = singleData;
	return (
		<div className="flex flex-col gap-5">
			<h2 className="text-4xl lg:text-6xl font-bold text-start">{title}</h2>
			<div className="h-[3px] w-36 bg-green-500"></div>
			<p className="text-start w-[200px] lg:w-[400px] ml-5 lg:ml-0">{desc}</p>
		</div>
	);
};
