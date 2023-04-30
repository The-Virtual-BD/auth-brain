import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


// import required modules
import {EffectFade, Navigation,Pagination, Autoplay } from "swiper";
import { slideData } from "../sharedPage/StaticData";

const Banner2 = () => {
	return (
		<div className="">
			<div className="">
				<Swiper
					loop={true}
					// grabCursor={true}
					// navigation={true}
                    pagination={{
                        clickable: true,
                      }}
                    effect={"fade"}
					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					slidesPerView={1}
					slidesPerGroup={1}
					modules={[ Pagination,EffectFade,Autoplay]}
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

export default Banner2;

const BannerSlide = ({ singleData }) => {
	const { id, title, desc,vdo } = singleData;
	return (
		<div className="video-wrapper   text-fontclr  pt-5 pb-5 flex items-center justify-center ">
			<video autoPlay muted loop>
				<source src={vdo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="flex flex-col items-center lg:items-start  gap-5 ">
				<h2 className="text-4xl lg:text-6xl font-bold text-center lg:text-start">
					{title}
				</h2>
				<div className="h-[3px] w-36 bg-green-500"></div>
				<p className="text-start w-[200px] lg:w-[500px] ml-5 lg:ml-0">{desc}</p>
			</div>
		</div>
	);
};
