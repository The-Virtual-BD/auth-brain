import Link from "next/link";
import React from "react";

const Introduc = () => {
	return (
		<div className="introducing-bg flex items-center justify-center text-primary px-6 lg:px-32 ">
			<div className="flex flex-col gap-4 items-center justify-center text-center max-w-7xl mx-auto">
				<h1 className="text-greenclr font-bold text-base uppercase ">
					Introducing
				</h1>

				<h2 className=" introduce-title capitalize">
					We Provide AI Solution <br /> for Your Toughest <br /> Challenges
				</h2>
				<div className="h-[3px] w-20 text-greenclr"></div>

				<p className="text-paraclr text-base w-full lg:w-2/5">
					AuthBrain has fundamentally reengineered distributed ledger
					technology, enabling secure exchange of both value and data, without
					any fees.
				</p>

				<button className="animated-btn">
					<Link href={"/aboutus"}>LEARN ABOUT AUTHBRAIN</Link>
				</button>
			</div>
		</div>
	);
};

export default Introduc;
