import React from "react";
import {
	AiFillSkype,
	AiOutlineMail,
	AiOutlineMobile,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<div className="">
			<div className="banner-bg flex items-center justify-center">
				<h2 className="text-4xl lg:text-6xl font-bold text-center text-white">
					Contact The AuthBrain
				</h2>
			</div>

			<div className="p-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-32">
				<div>
					<div className="text-start">
						<h3 className="text-greenclr mb-2 font-bold">Address</h3>
						<p className="">
							Deira, Near Gold Center Building,
							<br />
							Dubai 75157, <br />
							United Arab Emirates
						</p>
					</div>

					<div className="text-start mt-10">
						<h3 className="text-greenclr mb-2 font-bold">Contact</h3>

						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-[#0078D7] hover:bg-greenclr flex items-center justify-center">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<AiFillSkype className="text-xl text-white" />
									</a>
								</div>
								<p>live:mh_ashiq</p>
							</div>

							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-[#1BB55C] hover:bg-greenclr flex items-center justify-center">
									<a
										href="https://github.com/AuthBrain"
										target="_blank"
										rel="noopener noreferrer"
									>
										<AiOutlineMobile className="text-xl text-white" />
									</a>
								</div>
								<p>+880 1902-624501</p>
							</div>

							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-black hover:bg-greenclr flex items-center justify-center">
									<a
										href="https://github.com/AuthBrain"
										target="_blank"
										rel="noopener noreferrer"
									>
										<MdEmail className="text-xl text-white" />
									</a>
								</div>
								<p>contact@authbrain.com</p>
							</div>

							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-greenclr hover:bg-greenclr flex items-center justify-center">
									<a
										href="https://github.com/AuthBrain"
										target="_blank"
										rel="noopener noreferrer"
									>
										<AiOutlineWhatsApp className="text-xl text-white" />
									</a>
								</div>
								<p>+880 1902-624501</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3607.9847392458055!2d55.29374612695312!3d25.271098800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDeira%2C%20Near%20Gold%20Center%20Building%2C%20Dubai%2075157%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2snl!4v1681202182863!5m2!1sen!2snl"
						width="600"
						height="450"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
