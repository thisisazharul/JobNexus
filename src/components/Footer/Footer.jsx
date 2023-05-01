import React from "react";
import SocialMedia from "../../assets/Icons/Group 9969.png";
const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<div className="mt-10 bg-gray-700 py-10">
			<div className="mx-auto  grid w-2/3 grid-cols-5 pt-10 text-white">
				<div className="mr-10 flex flex-col gap-5">
					<h1 className="text-2xl font-bold">JobNexus</h1>
					<p className="text-sm ">
						JobNexus is a job portal that helps you find your dream job
					</p>
					<img
						className="h-8 w-28"
						src={SocialMedia}
						alt="Social Media"
					/>
				</div>
				<div className="">
					<ul className="flex cursor-pointer flex-col gap-4 text-sm">
						<li className="text-lg font-semibold">Company</li>
						<li>About Us</li>
						<li>Work</li>
						<li>Latest News</li>
						<li>Careers</li>
					</ul>
				</div>
				<div>
					<ul className="flex cursor-pointer flex-col gap-4 text-sm">
						<li className="text-lg font-semibold">Product</li>
						<li>Prototype</li>
						<li>Pricing</li>
						<li>Customers</li>
						<li>Integrations</li>
					</ul>
				</div>
				<div>
					<ul className="flex cursor-pointer flex-col gap-4 text-sm">
						<li className="text-lg font-semibold">Support</li>
						<li>Help Desk</li>
						<li>Sales</li>
						<li>Become a partner</li>
						<li>Developers</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
