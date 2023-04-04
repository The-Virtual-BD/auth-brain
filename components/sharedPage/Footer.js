import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
	return (
		<footer>
			<div className="h-[500px] bg-darkBg text-fontclr px-24 p-10 ">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div>
						<h2 className="text-4xl font-bold mt-20">
							AUTHBRAIN Provides Digital Trust, Enabling Us to Build a Better
							World
						</h2>
						<div className="text-start mt-8">
							<h3 className="text-greenclr mb-2">Registered Address</h3>
							<p className="text-sm">
								AuthBrain Foundation <br />
								Pappelallee 78/79 <br />
								10437 Berlin <br />
								Germany
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>

            </div>
		</footer>
	);
};

export default Footer;
