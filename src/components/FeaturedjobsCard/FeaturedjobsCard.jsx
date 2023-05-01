import Location from "../../assets/Icons/Location Icon.png";
import Dollar from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const FeaturedjobsCard = ({ featurejob }) => {
	const { id, title, image, company, type, salary, location } = featurejob;

	return (
		<div className="mx-auto w-11/12 grid-cols-2 rounded-lg p-4 shadow-md ring-2 ring-slate-200 hover:shadow-lg hover:ring-rose-200">
			<ul className="flex flex-col items-center justify-center gap-2 p-2 text-center xl:ml-5 xl:items-baseline">
				<li>
					<img
						className="h-10"
						src={image}
						alt=""
					/>
				</li>
				<li>
					<h2 className="text-lg font-semibold text-gray-700">{title}</h2>
				</li>
				<li>
					<p className="text-md text-gray-600">{company}</p>
				</li>
				<li className="flex flex-row gap-3">
					<span className="cursor-pointer rounded-full px-5 py-1 ring-2 ring-slate-100 hover:bg-green-500 hover:text-white">
						{type.remote}
					</span>
					<span className="cursor-pointer rounded-full px-5 py-1 ring-2 ring-slate-100 hover:bg-blue-500 hover:text-white">
						{type.fullTime}
					</span>
				</li>
				<li className="flex shrink-0 flex-col gap-2 xl:flex-row">
					<span className="text-md shrink-0 font-semibold text-gray-600">
						&#127970; {location}
					</span>
					<span className="text-md  shrink-0 text-gray-600">
						&#128181; <span className="font-semibold">Salary:</span> {salary}
					</span>
				</li>
				<li className="mt-2 cursor-pointer rounded-full px-5 py-2 ring-1 ring-rose-100 hover:bg-rose-600 hover:text-white">
					<Link to={`/jobdetails/${id}`}>View Details</Link>
				</li>
			</ul>

			{/* <div className="flex gap-3 text-blue-600"></div>
			<div className="flex gap-3 py-2">
				<div className="flex gap-1"></div>
				<div className="flex gap-1"></div>
			</div>
			<div className="py-2"></div> */}
		</div>
	);
};

export default FeaturedjobsCard;
