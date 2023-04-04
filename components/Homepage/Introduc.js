import React from "react";

const Introduc = () => {
	return (
		<div className="introducing-bg flex items-center   text-primary px-6 lg:px-32">
			<div className="flex flex-col gap-4 items-center justify-center text-center">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					Introducing
				</h1>

				<h2 className=" introduce-title capitalize">
					We Provide AI Solution <br /> for Your Toughest <br /> Challenges
				</h2>
				<div className="h-[3px] w-20 text-greenclr"></div>

				<p className="text-paraclr text-base w-2/5">
					AuthBrain has fundamentally reengineered distributed ledger
					technology, enabling secure exchange of both value and data, without
					any fees.
				</p>

				<button className="main-btn">LEARN ABOUT AUTHBRAIN</button>
			</div>
		</div>
	);
};

export default Introduc;
