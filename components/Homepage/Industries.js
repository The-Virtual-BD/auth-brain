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
import Link from "next/link";

const Industries = () => {
	return (
		<div className="industry-video-wrapper   bg-transparent  p-10  px-6 lg:px-32">
			<video autoPlay muted loop>
				<source src="/assets/Particles2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="">
				<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
					<h1 className="text-greenclr font-bold text-base uppercase ">
						Industries
					</h1>

					<h2 className=" introduce-title capitalize text-white">
						AuthBrain enables <br /> new possibilities
					</h2>
					{/* <div className="h-[3px] w-20 bg-green-500"></div> */}
				</div>

				<div className="flex items-center justify-center  mt-10 max-w-7xl mx-auto  px-6 lg:px-32">
					<Swiper
						loop={true}
						// grabCursor={true}
						// effect={"fade"}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						slidesPerView={1}
						slidesPerGroup={1}
						modules={[Navigation, Autoplay]}
						className="mySwiper"
					>
						{industriesData.map((singleData) => (
							<SwiperSlide key={singleData.id}>
								<IndustrySlide singleData={singleData} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="text-center mt-5">
					<button className="view-details-btn">
						<Link href={"/solutions"}>EXPLORE MORE</Link>
					</button>
				</div>
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
		<div className=" w-full h-auto  text-fontclr flex flex-col items-center justify-center">
			<div className="flex flex-col gap-2 p-5  ">
				<h2 className=" text-xl lg:text-2xl font-bold text-start ">{title}</h2>
				<div className="h-[3px] w-full bg-green-500"></div>
			</div>

			<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-7 lg:gap-10 p-5  mt-5  ">
				<div className="flex flex-col items-center justify-center">
					<div className=" text-4xl text-center ">{feat1Icon}</div>
					<h2 className=" text-lg lg:text-xl font-bold my-3">{feat1}</h2>
					<p className="text-sm  w-[220px] ">{feat1Desc}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-4xl text-center">{feat2Icon}</div>
					<h2 className=" text-lg lg:text-xl font-bold my-3">{feat2}</h2>
					<p className="text-sm  w-[220px]">{feat2Desc}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="text-4xl text-center">{feat3Icon}</div>
					<h2 className=" text-lg lg:text-xl font-bold my-3">{feat3}</h2>
					<p className="text-sm  w-[220px] ">{feat3Desc}</p>
				</div>
			</div>
		</div>
	);
};
