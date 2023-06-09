import Head from "next/head";
import Banner from "../components/Homepage/Banner";
import Introduc from "../components/Homepage/Introduc";
import Industries from "../components/Homepage/Industries";
import Lightpaper from "../components/Homepage/Lightpaper";
import Explore from "../components/Homepage/Explore";
import GetStarted from "../components/Homepage/GetStarted";
import Team from "../components/Pages/Team";
import Banner2 from "../components/Homepage/Banner2";

export default function Home() {
	return (
		<div>
			<Head>
				<title>AuthBrain || Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				{/* <Banner /> */}
				<Banner2 />
				<Introduc />
				<Industries />
				<Lightpaper />
				{/* <Team /> */}
				<GetStarted />
				<Explore />
			</div>
		</div>
	);
}
