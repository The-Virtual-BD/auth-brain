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

			<section>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
					{exploreCard.map((cardData) => (
						<div
							class={`card`}
							style={{ backgroundImage: `url(${cardData.img})` }}
							key={cardData.id}
						>
							<div class="content">
								<h2 class="title uppercase">{cardData.name}</h2>
								<p class="copy">{cardData.desc}</p>

								<button class="btn">Learn More</button>
							</div>
						</div>
					))}
				</div>
			</section>

			<div className="text-center">
				<button className="view-explorer-btn">VIEW ALL DEPARTMENTS</button>
			</div>
		</div>
	);
};

export default Explore;
