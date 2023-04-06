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
		<div className=" p-10 px-6 lg:px-32 bg-primary">
			<div className="flex flex-col gap-4 items-center justify-center text-center">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					Industries
				</h1>

				<h2 className=" introduce-title capitalize text-white">
					AUTHBRAIN enables <br /> new possibilities
				</h2>
				{/* <div className="h-[3px] w-20 bg-green-500"></div> */}
			</div>

			<div className="flex items-center justify-center  mt-10">
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
	const {
		id,
		title,
		feat1,
		feat1Desc,
		feat2,
		feat2Desc,
		feat3,
		feat3Desc,
		feat1Icon,
		feat2Icon,
		feat3Icon,
	} = singleData;
	return (
		<div className=" w-full h-auto bg-primary text-fontclr flex flex-col items-center justify-center">
			<div className="flex flex-col gap-2 p-10  ">
				<h2 className="text-2xl font-bold text-start ">{title}</h2>
				<div className="h-[3px] w-full bg-green-500"></div>
			</div>

			<div className="flex items-start justify-between gap-6 w-full h-full mt-10 bg-primary p-10">
				<div className="flex flex-col items-center justify-center">
					<div className="text-4xl text-center">{feat1Icon}</div>
					<h2 className="text-xl font-bold my-3">{feat1}</h2>
					<p className="text-sm  w-[320px] ">{feat1Desc}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-4xl text-center">{feat2Icon}</div>
					<h2 className="text-xl font-bold my-3">{feat2}</h2>
					<p className="text-sm w-[320px] ">{feat2Desc}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-4xl text-center">{feat3Icon}</div>
					<h2 className="text-xl font-bold my-3">{feat3}</h2>
					<p className="text-sm w-[320px] ">{feat3Desc}</p>
				</div>
			</div>
		</div>
	);
};
