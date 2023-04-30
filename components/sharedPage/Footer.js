import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className=" bg-darkBg text-fontclr ">
			<div className=" px-6 lg:px-24 py-10 max-w-7xl mx-auto">
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div>
							<Link href={"/"}>
								<Image
									src={"/assets/authbrain.png"}
									width={221}
									height={58}
									alt="logo"
								/>
								{/* <h2 className="text-2xl font-bold text-white"> AuthBrain</h2> */}
							</Link>
							<h2 className="text-2xl lg:text-4xl font-bold mt-3 capitalize">
								Provides Digital Trust,
								<br /> Enabling Us to Build a <br /> Better World
							</h2>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						<div className="text-start mt-14">
							<h3 className="text-greenclr mb-2">Registered Address</h3>

							<p className="text-sm">
								Home 315, Road 3, Phase 2,
								<br />
								Sonadanga R/A, Khulna 9100,
								<br />
								Bangladesh
							</p>
						</div>

						<div className="text-start mt-14">
							<div className="flex items-center gap-3">
								<div className="h-8 w-8 rounded-full bg-[#1877F2] hover:bg-greenclr flex items-center justify-center">
									<a href="https://www.facebook.com/TheVirtualBD" target="_blank" rel="noopener noreferrer">
										<BsFacebook className="text-xl" />
									</a>
								</div>

								<div className="h-8 w-8 rounded-full bg-[#FF0000] hover:bg-greenclr flex items-center justify-center">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<BsYoutube className="text-xl" />
									</a>
								</div>
								
								<div className="h-8 w-8 rounded-full bg-white hover:bg-greenclr flex items-center justify-center">
									<a
										href="https://github.com/AuthBrain"
										target="_blank"
										rel="noopener noreferrer"
									>
										<BsGithub className="text-xl text-black" />
									</a>
								</div>
							</div>

							<div className="my-5">
								<h3 className=" text-greenclr font-bold mb-1">SUBSCRIPTION</h3>
								<form>
									<input
										type="text"
										className="w-full bg-white text-primary px-3 rounded-md py-1.5 outline-none"
										placeholder="Enter your email"
									/>
								</form>
							</div>

							<div>
								<p className="text-sm">
									© 2023 - <Link href={"/"} className="text-greenclr">AuthBrain</Link> - All Rights Reserved.
									
								</p>
								<p className="text-sm">
									Get in touch :{" "}
									<Link href={"/contact"} className="text-greenclr">
										Contact Us
									</Link>{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
