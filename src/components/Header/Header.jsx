import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/images/logo.png";

const Header = () => {
	return (
		<div>
			<div className="navbar sticky top-0 z-50 mx-auto w-3/4">
				<div className="navbar-start relative">
					<div className="dropdown">
						<label
							tabIndex="0"
							className="lg:hidden">
							<Bars3Icon className="h-8 w-8 text-gray-400 hover:font-bold hover:text-rose-600" />
						</label>
						<ul
							tabIndex="0"
							className="dropdown-content menu mt-3 flex w-40 flex-col justify-center gap-2 divide-y rounded-lg border border-green-900/10 bg-gray-50 p-2 shadow-2xl">
							<li className="rounded-md hover:bg-rose-500 hover:text-white">
								<Link to="#">Home</Link>
							</li>
							<li className="rounded-md hover:bg-rose-500 hover:text-white">
								<Link to="/statistics">Statistics</Link>
							</li>
							<li className="rounded-md hover:bg-rose-500 hover:text-white">
								<Link to="/appliedjobs">Applied Jobs</Link>
							</li>
							<li className="rounded-md hover:bg-rose-500 hover:text-white">
								<Link to="/blog">Blog</Link>
							</li>
						</ul>
					</div>
					<div className="mx-auto flex text-2xl sm:mx-3 lg:mx-0 lg:text-3xl">
						<img
							src={Logo}
							className="mt-0 h-8 w-8"
							alt=""
						/>
						<span className=" ml-3 text-rose-600">Job</span>Nexus
					</div>
				</div>
				<nav className="navbar-center sticky top-0 z-50 hidden lg:flex">
					<ul className="menu-horizontal flex flex-row justify-center gap-5 px-1">
						<li className="text-md font-semibold text-gray-500 hover:text-rose-600">
							<Link to="">Home</Link>
						</li>
						<li className="text-md font-semibold text-gray-500 hover:text-rose-600">
							<Link to="/statistics">Statistics</Link>
						</li>
						<li className="text-md font-semibold text-gray-500 hover:text-rose-600">
							<Link to="/appliedjobs">Applied Jobs</Link>
						</li>
						<li className="text-md font-semibold text-gray-500 hover:text-rose-600">
							<Link to="/blog">Blog</Link>
						</li>
					</ul>
				</nav>
				<div className="navbar-end">
					<button className="text-md rounded-md px-4 py-2 font-semibold text-rose-600 shadow-sm ring-1 ring-rose-100 hover:bg-rose-600 hover:text-white hover:shadow-lg">
						Start Applying
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
