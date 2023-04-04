import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper";
import { industriesData, slideData } from "../sharedPage/StaticData";

const Industries = () => {
	return (
		<div className=" h-[100vh] p-10 px-6 lg:px-32 bg-primary">
			<div className="flex flex-col gap-4 items-center justify-center text-center">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					Industries
				</h1>

				<h2 className=" introduce-title capitalize text-white">
					AUTHBRAIN enables <br /> new possibilities
				</h2>
				{/* <div className="h-[3px] w-20 bg-green-500"></div> */}
			</div>

			<div className="flex items-center justify-center  my-10">
				<Swiper
					loop={true}
					// grabCursor={true}
					effect={"fade"}
					navigation={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					slidesPerView={1}
					slidesPerGroup={1}
					modules={[EffectFade, Navigation, Autoplay]}
					className="mySwiper"
				>
					{industriesData.map((singleData) => (
						<SwiperSlide key={singleData.id}>
							<IndustrySlide singleData={singleData} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Industries;

const IndustrySlide = ({ singleData }) => {
	const { id, title, feat1, feat1Desc, feat2, feat2Desc, feat3, feat3Desc } =
		singleData;
	return (
		<div className=" w-full bg-primary text-fontclr flex flex-col items-center justify-center h-full">
			<div className="flex flex-col gap-5   p-14  ">
				<h2 className="text-2xl font-bold text-start ">{title}</h2>
				<div className="h-[3px] w-full bg-green-500"></div>
			</div>
			<div className="grid grid-cols-3 gap-5 w-full h-full mt-20">
				<div>
					<h2 className="text-xl font-bold mb-4">{feat1}</h2>
					<p className="text-sm">{feat1Desc}</p>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-4">{feat2}</h2>
					<p className="text-sm">{feat2Desc}</p>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-4">{feat3}</h2>
					<p className="text-sm">{feat3Desc}</p>
				</div>
			</div>
		</div>
	);
};
