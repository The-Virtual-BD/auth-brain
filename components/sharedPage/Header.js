import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [open, setOpen] = useState(false);

	const memuItems = (
		<>
			<li className="text-fontclr ">
				<Link href={"/"} className="flex items-center">
					<span>Home</span>
				</Link>
			</li>

			<li className="text-fontclr ">
				<Link href={"#"} className="flex items-center">
					<span>Solution</span>
				</Link>
			</li>
			<li className="text-fontclr ">
				<Link href={"#"} className="flex items-center">
					<span>Connect</span>
				</Link>
			</li>
		</>
	);

	return (
		<div className="">
			<header className="bg-darkBg opacity-75  w-full px-6 lg:px-32 py-2 h-16 flex items-center justify-between  shadow-lg  fixed  z-50 ease-in duration-300">
				<button
					onClick={() => setOpen(!open)}
					className="block lg:hidden text-chardark"
				>
					{!open ? (
						<AiOutlineMenu className="text-4xl" />
					) : (
						<AiOutlineClose className="text-4xl" />
					)}
				</button>

				<Link href={"/"}>
					{/*  <Image
                        src={"/logo.png"}
                        width={150}
                        height={40}
                        alt="logo"
                    /> */}
					<h2 className="text-2xl font-bold text-white"> AuthBrain</h2>
				</Link>

				<nav class="stroke">
					<ul className="hidden  lg:flex lg:flex-row justify-between items-center gap-10 text-lg ">
						{memuItems}
					</ul>
				</nav>
			</header>

			{open ? (
				<div className="bg-darkBg text-white rounded w-full  pl-5  py-7 z-10 fixed">
					<ul
						className=" lg:hidden flex flex-col items-start gap-5 pt-20 px-5"
						onClick={() => setOpen(!open)}
					>
						{memuItems}
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default Header;
