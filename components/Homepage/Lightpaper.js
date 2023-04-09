import Image from "next/image";
import React from "react";

const Lightpaper = () => {
	return (
		<div className="bg-secdarkBg p-10 py-14 text-fontclr  px-6 lg:px-32">
			<div className="flex flex-col lg:flex-row items-center gap-5 max-w-7xl mx-auto">
				<div className="w-full lg:w-1/2">
					<h1 className="text-greenclr font-bold text-base uppercase mb-3">
						Introducing
					</h1>
					<h2 className=" introduce-title mb-4">
						AuthBrain Lightpaper
					</h2>
					<p className="text-fontclr text-sm mb-3">
						Increasingly, companies and startups are integrating distributed
						ledger technology (DLT) into their business. The AuthBrain
						Lightpaper for Business provides beginners with an overview of this
						groundbreaking technology and the benefits it delivers to business,
						as well as several inspiring use cases.
					</p>
					<p className="text-fontclr text-sm mb-4">
						Download the AuthBrain Lightpaper for Business for free and learn
						how DLT enables new business models and cutting-edge innovation –
						and how you could use it:
					</p>
					<button className="animated-btn">EXPLORE</button>
				</div>

				<div className="w-full lg:w-1/2">
					<Image
						src={"/assets/lightpaper.png"}
						alt="lightpaper"
						width={640}
						height={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default Lightpaper;
