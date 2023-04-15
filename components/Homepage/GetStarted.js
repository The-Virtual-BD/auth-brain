import React from "react";
import { startedData, teamMember } from "../sharedPage/StaticData";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const GetStarted = () => {
	return (
		<div className=" py-10 bg-primary text-white">
			<h2 className=" introduce-title capitalize text-center">Our Team</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 mt-10 mb-20  max-w-7xl mx-auto px-6 lg:px-24">
				{teamMember
					.map((team) => <MemberCard key={team.id} team={team} />).slice(0,3)
					}
			</div>

			<div className="text-center ">
				<button className="view-details-btn">
					<Link href={"/aboutus"}>MEET OTHER TEAM MEMBERS</Link>
				</button>
			</div>
		</div>
	);
};

export default GetStarted;

const MemberCard = ({ team }) => {
	const { id, name, img, designation, linkedIn, github } = team;
	return (
		<div>
			<div className="team_card ">
				<div className="team_img">
					<img src={img} alt="" />
				</div>

				<div className="team_info">
					<h2 className="font-semibold">{name}</h2>
					<p className="italic">{designation}</p>

					<div className="team_social">
						<div className="flex items-center gap-3 justify-center">
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsFacebook />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsTwitter />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsInstagram />
								</Link>
							</div>
							<div className="team_social_icon">
								<Link href={"#"}>
									<BsLinkedin />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
