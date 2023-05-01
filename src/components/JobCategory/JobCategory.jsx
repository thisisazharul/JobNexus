import React, { useEffect, useState } from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const JobCategory = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("jobCategory.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="mx-auto flex w-3/4 flex-col gap-5 px-1">
			<div className="text-center">
				<h1 className="mt-10 text-4xl font-bold">Job Category List</h1>
				<p className="mt-5 ">
					Explore thousands of job opportunities from the job categories with
					all the information you need. Its your future
				</p>
			</div>
			<div className="my-5 grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-4">
				{data.map((category) => (
					<JobCategoryCard
						key={category.id}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};

export default JobCategory;
