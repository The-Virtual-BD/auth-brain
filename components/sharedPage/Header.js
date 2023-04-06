import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [navbarStyle, setNavbarStyle] = useState("opacity-100");

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

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset === 0) {
				setNavbarStyle("opacity-100");
			} else {
				setNavbarStyle("opacity-75");
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`bg-darkBg opacity-100  w-full   py-2 h-16   shadow-lg  fixed  z-50 ease-in duration-300 lg:${navbarStyle}`}>
			<header className="flex items-center justify-between max-w-7xl mx-auto">
				<button
					onClick={() => setOpen(!open)}
					className="block lg:hidden mt-2 lg:mt-0"
				>
					{!open ? (
						<AiOutlineMenu className="text-3xl text-white" />
					) : (
						<AiOutlineClose className="text-3xl text-white" />
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
				<div className="bg-darkBg  text-white rounded w-full  pl-5  py-5 z-10 fixed ">
					<nav class="stroke">
						<ul
							className=" lg:hidden flex flex-col items-start  px-5 w-full"
							onClick={() => setOpen(!open)}
						>
							{memuItems}
						</ul>
					</nav>
				</div>
			) : null}
		</div>
	);
};

export default Header;
