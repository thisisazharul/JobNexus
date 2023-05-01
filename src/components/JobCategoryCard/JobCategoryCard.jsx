import React from "react";
const JobCategoryCard = ({ category }) => {
	const { jobCategoryName, totalJobAvailable, imageLink } = category;
	return (
		<a className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-slate-200 p-4 text-center shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:shadow-md md:items-start md:text-start">
			<img
				className="block h-10 w-10"
				src={imageLink}
				alt=""
			/>
			<h3 className="my-2 shrink-0 font-bold">{jobCategoryName}</h3>
			<p>{totalJobAvailable} Jobs Available</p>
		</a>
	);
};

export default JobCategoryCard;
