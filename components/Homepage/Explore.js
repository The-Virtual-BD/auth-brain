import Image from "next/image";
import React from "react";
import { exploreCard } from "../sharedPage/StaticData";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Explore = () => {
	return (
		<div className="bg-secdarkBg  py-10  text-fontclr  px-6 lg:px-32 ">
			<section>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto">
					<div className="bg-white text-primary p-8 flex flex-col items-start justify-end rounded-md">
						<h1 className="text-greenclr font-bold text-base uppercase ">
							explore
						</h1>
						<h2 class="text-4xl font-semibold capitalize mt-8 mb-4">
							AuthBrain <br /> Foundation
						</h2>
						<p className=" text-sm text-paraclr mb-8">
							Learn about the deep expertise that drives the AuthBrain
							Foundation
						</p>

						<button class="text-green-500 capitalize font-bold ">
							<Link href={"/solutions"} className="flex items-center gap-1 tracking-normal hover:tracking-wide  ease-in duration-300 ">
								<span>View all solutions</span>{" "}
								<IoIosArrowForward className="font-bold " />
							</Link>
						</button>
					</div>

					{exploreCard.map((cardData) => (
						<div
							class={`card`}
							style={{ backgroundImage: `url(${cardData.img})` }}
							key={cardData.id}
						>
							<div class="content">
								<h2 class="title uppercase">{cardData.name}</h2>
								<p class="copy">{cardData.desc}</p>

								<button class="text-green-500 ">
									<Link
										href={`${cardData.path}`}
										className="flex items-center gap-1  tracking-normal hover:tracking-wider ease-in duration-300"
									>
										<span>Learn More</span>{" "}
										<IoIosArrowForward className="font-bold " />
									</Link>
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* <div className="text-center">
				<button className="view-explorer-btn ">VIEW ALL DEPARTMENTS</button>
			</div> */}
		</div>
	);
};

export default Explore;
