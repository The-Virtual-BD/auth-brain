import Link from "next/link";
import React from "react";
import { teamMember } from "../sharedPage/StaticData";

const Team = () => {
	return (
		<div className=" py-10 text-primary px-6 lg:px-32 ">
			<h2 className=" introduce-title capitalize text-center">Our Team</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
				{teamMember.map((team) => (
					<MemberCard key={team.id} team={team} />
				))}
			</div>
			<div className="text-center">
				<button className="view-details-btn">
					<Link href={"/products"}>MEET OTHER TEAM MEMBERS</Link>
				</button>
			</div>
		</div>
	);
};

export default Team;

const MemberCard = ({ team }) => {
	const { id, name, img, designation, linkedIn, github } = team;
	return <div>Helo</div>;
};
