import React,{ useRef,} from "react";

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
		<div id="card" className="banner-bg text-fontclr  pt-5 pb-5 flex items-center justify-center ">
			<div className="flex items-center justify-center w-5/6">
				<Swiper
					loop={true}
					// grabCursor={true}
                    navigation={true}
					autoplay={{
						delay: 3000,
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
		<div className="flex flex-col gap-5  w-4/6 ">
			<h2 className="text-6xl font-bold text-start">{title}</h2>
            <div className="h-[3px] w-36 bg-green-500"></div>
            <p className="text-start">{desc}</p>
		</div>
	);
};
