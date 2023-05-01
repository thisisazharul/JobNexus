import React from "react";
import "./HeadCover.css";
import HeroImg from "../../assets/images/hero.png";

const HeadCover = () => {
	return (
		<div className="mx-auto flex h-[75vh] w-3/4 flex-col items-center justify-center md:flex-row ">
			<div className="flex flex-col items-center justify-center md:flex-row ">
				<div className="w-3/4">
					<h1 className=" text-center text-4xl font-bold text-slate-600 lg:text-left lg:text-6xl lg:leading-snug">
						One Step <br /> Closer To Your <br />{" "}
						<span className="text-rose-600">Dream Job</span>
					</h1>
					<p className="text-md mt-10 w-2/3 text-justify font-semibold text-gray-600">
						Explore thousands of job opportunities with all the information you
						need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<button className="text-md mt-5 rounded-md px-4 py-2 font-semibold text-rose-600 shadow-sm ring-1 ring-rose-200 hover:bg-rose-600 hover:text-white hover:shadow-lg">
						Get Started
					</button>
				</div>
				<div>
					<img
						src={HeroImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default HeadCover;
