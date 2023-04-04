import React from "react";
import { startedData } from "../sharedPage/StaticData";

import { MdOutlineArrowForwardIos } from "react-icons/md";

const GetStarted = () => {
	return (
		<div className=" p-10 text-primary px-24 ">
			<h2 className=" introduce-title capitalize text-center">Get Started</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 ">
				{startedData.map((data) => (
					<div
						key={data.id}
						className="p-10 rounded-lg  flex flex-col justify-center gap-5  started-card"
					>
						<div className="flex flex-col items-center ">
							<h1 className="font-bold uppercase text-base ">{data.title}</h1>

							<h2 className="font-bold text-3xl mt-4 mb-5">{data.subTitle}</h2>

							<p className="text-sm mb-5 text-center">{data.desc}</p>

							<ul className="text-sm  text-start my-8 ">
								<li className="flex items-center gap-1">
									{" "}
									<MdOutlineArrowForwardIos /> <span>{data.step1}</span>
								</li>
								<li className="flex items-center gap-1 my-3">
									{" "}
									<MdOutlineArrowForwardIos /> <span>{data.step2}</span>
								</li>
								<li className="flex items-center gap-1 my-3">
									{" "}
									<MdOutlineArrowForwardIos /> <span>{data.step3}</span>
								</li>

								{data.step4 && (
									<li className="flex items-center gap-1">
										{" "}
										<MdOutlineArrowForwardIos /> <span>{data.step4}</span>
									</li>
								)}
							</ul>

							<button className="started-card-btn mt-8">{data.btnName}</button>
						</div>
					</div>
				))}
			</div>

			<div className="text-center">
				<button className="view-details-btn">VIEW OUR PRODUCTS</button>
			</div>
		</div>
	);
};

export default GetStarted;
