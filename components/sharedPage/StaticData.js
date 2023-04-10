import { FaRegSmile } from "react-icons/fa";
import { TbVirus } from "react-icons/tb";
import { RiVoiceprintLine } from "react-icons/ri";
import { BiBot, BiBrain, BiImageAlt, BiUserCircle } from "react-icons/bi";

export const slideData = [
	{
		id: 1,
		title: "Machine Learning",
		desc: "Machine learning is a type of artificial intelligence that enables computer systems to learn and improve their performance on a particular task or set of tasks over time, without being explicitly programmed to do so.",
	},
	{
		id: 2,
		title: "Deep Learning",
		desc: "Deep learning is a type of machine learning that uses neural networks with multiple layers to learn and extract complex features from data.",
	},
	{
		id: 3,
		title: "Federated Learning",
		desc: "Federated learning is a machine learning technique that allows multiple devices or organizations to collaboratively train a machine learning model without exchanging the raw data.",
	},
];

export const exploreCard = [
	{
		id: 1,
		name: "Products",
		desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus maxime perspiciatis aliquid",
		img: "/assets/research2.png",
	},

	{
		id: 3,
		name: "Research ",
		desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus maxime perspiciatis aliquid",
		img: "/assets/product.png",
	},
];

export const startedData = [
	{
		id: 1,
		title: "Community",
		subTitle: "Explore",
		desc: "Connect with like-minded people in the community",
		step1: "Read our documentation",
		step2: "Explore the roadmap",
		step3: "Explore the code libraries",
		step4: "Learn with tutorials",
		btnName: "START ENGAGING",
	},
	{
		id: 2,
		title: "Developer",
		subTitle: "Develop",
		desc: "Start building innovative solutions with IOTA",
		step1: "Read our documentation",
		step2: "Explore the roadmap",
		step3: "Explore the code libraries",
		step4: "Learn with tutorials",
		btnName: "START DEVELOPING",
	},
	{
		id: 3,
		title: "Enterprise",
		subTitle: "Solutions",
		desc: "Discover new applications and business models",
		step1: "AuthBrain technologies",
		step2: "Explore industries",
		step3: "Partner with us",
		btnName: "START INNOVATING",
	},
];

export const industriesData = [
	{
		id: 1,
		title: "Natural Language Processing (NLP)",
		feat1: "Chatbot",
		feat1Icon: <BiBot />,
		feat1Desc:
			"Chatbots use natural language processing (NLP) technology to understand and interpret user requests.",
		feat2: "Sentiment Analysis",
		feat2Icon: <FaRegSmile />,
		feat2Desc:
			"Sentiment analysis is a natural language processing (NLP) technique that involves using machine learning algorithms to extract subjective information from text data.",
		feat3: "Human Centric Intelligence",
		feat3Icon: <BiUserCircle />,
		feat3Desc:
			"Human Centric Intelligence (HCI) is a concept that emphasizes the importance of human-centered design in the development of intelligent systems and technologies.",
		video: "/assets/banner-video.mp4",
	},
	{
		id: 2,
		title: "Computer Vision",
		feat1: "Image Processing",
		feat1Icon: <BiImageAlt />,
		feat1Desc:
			"Image processing is a subfield of artificial intelligence that focuses on the analysis and manipulation of digital images using computer algorithms.",
		feat2: "Disease Classification ",
		feat2Icon: <TbVirus />,
		feat2Desc:
			"Disease classification in AI technology involves the use of machine learning algorithms and statistical models to automatically classify medical conditions based on various symptoms, patient history, and medical imaging data.",
		feat3: "Human Centric Intelligence",
		feat3Icon: <BiUserCircle />,
		feat3Desc:
			"Human Centric Intelligence (HCI) is a concept that emphasizes the importance of human-centered design in the development of intelligent systems and technologies.",
		video: "/assets/banner-video.mp4",
	},
	{
		id: 3,
		title: "Speech/ Signal Recognition",
		feat1: "Voice Recognition",
		feat1Icon: <RiVoiceprintLine />,
		feat1Desc:
			"Voice recognition, also known as speech recognition, is the ability of a computer or machine to recognize and interpret spoken language or commands.",
		feat2: "Brain Signal Recognition",
		feat2Icon: <BiBrain />,
		feat2Desc:
			"Brain signal recognition is a subfield of artificial intelligence that focuses on the analysis and interpretation of electroencephalography (EEG) signals generated by the human brain.",
		feat3: "Human Centric Intelligence",
		feat3Icon: <BiUserCircle />,
		feat3Desc:
			"Human Centric Intelligence (HCI) is a concept that emphasizes the importance of human-centered design in the development of intelligent systems and technologies.",
		video: "/assets/banner-video.mp4",
	},
];
