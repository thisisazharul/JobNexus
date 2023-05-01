import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakedb";

const Appliedjobs = () => {
	const [mydata, setMydata] = useState([]);
	const [newData, setNewdata] = useState([]);

	let localData = getShoppingCart();

	useEffect(() => {
		fetch("/jobs.json")
			.then((res) => res.json())
			.then((data) => setMydata(data));
	}, []);

	useEffect(() => {
		const filteredData = [];
		for (const id in localData) {
			const job = mydata.find((data) => data.id === id);
			if (job) {
				filteredData.push(job);
			}
		}
		setNewdata(filteredData);
	}, [localData]);

	return (
		<div className="ite mx-auto flex h-[80vh] w-2/3 flex-col p-5 md:px-16">
			<div className="my-20 bg-rose-100/40">
				<h2 className=" py-5 text-center text-3xl font-bold text-rose-950">
					Applied Jobs
				</h2>
			</div>

			{newData.map((data) => (
				<div key={data.id}>
					<div className="mx-auto mb-5 flex w-3/4 flex-row  items-center gap-5 rounded-lg  border-2 p-4 shadow-sm hover:bg-rose-50 hover:shadow-lg">
						<div className="ml-10">
							<img
								className="w-20"
								src={data.image}
								alt=""
							/>
						</div>

						<div>
							<h2 className="ml-10 font-bold">{data.title}</h2>
							<h2 className="ml-10">{data.company}</h2>

							<div className="ml-10 flex flex-row gap-3">
								<div>{data.location}</div>
								<div>{data.salary}</div>
							</div>
						</div>
						<div className="ml-10 flex gap-3 py-3">
							<div className="cursor-pointer rounded-full px-5 py-1 ring-2 ring-slate-100 hover:bg-green-500 hover:text-white">
								{data.type.remote}
							</div>
							<div className="cursor-pointer rounded-full px-5 py-1 ring-2 ring-slate-100 hover:bg-blue-500 hover:text-white">
								{data.type.fullTime}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Appliedjobs;
