import Image from "next/image";
import React from "react";
import { exploreCard } from "../sharedPage/StaticData";

const Explore = () => {
	return (
		<div className="bg-secdarkBg py-10  text-fontclr  px-6 lg:px-32">
			<div className="flex flex-col gap-2 items-center justify-center text-center">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					explore
				</h1>
				<h2 className=" introduce-title capitalize">AUTHBRAIN Foundation</h2>

				<p className=" text-sm">
					Learn about the deep expertise that drives the AUTHBRAIN Foundation
				</p>
			</div>

			<div className="flex items-center gap-10 my-10 ">
				{exploreCard.map((data) => (
					<div key={data.id} class="wrapper">
						<div class="card">
							<img src={data.img} alt={data.name} />
							<div>
								<h2 className="text-2xl font-bold">Hello</h2>
								<div class="info">
									<h1 className="font-bold text-2xl">{data.name} </h1>
									<p className="text-sm mb-3">{data.desc} </p>
									<button className="text-greenclr">Learn More</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="text-center">
				<button className="view-explorer-btn">VIEW ALL DEPARTMENTS</button>
			</div>
		</div>
	);
};

export default Explore;
