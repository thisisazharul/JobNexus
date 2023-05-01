import { useState } from "react";
import FeaturedjobsCard from "../FeaturedjobsCard/FeaturedjobsCard";
import { useLoaderData } from "react-router-dom";

const Featuredjobs = () => {
	const data = useLoaderData();
	const [sliceData, setSliceData] = useState(4);
	return (
		<div className="mx-auto mt-20 w-3/4 p-2">
			<div className="mb-5 text-center">
				<h1 className="text-4xl font-bold">Featured Jobs</h1>
				<p className="py-5">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
			</div>
			{/* Featured Card data will be added here */}
			<div className="grid grid-cols-1 gap-10 py-5 xl:grid-cols-2">
				{data.slice(0, sliceData == 4 ? sliceData : 6).map((featurejob) => (
					<FeaturedjobsCard
						key={featurejob.id}
						featurejob={featurejob}
					/>
				))}
			</div>
			<div className="my-3 ms-auto text-center">
				{sliceData == 4 ? (
					<>
						<button
							onClick={() => setSliceData(6)}
							className="text-md rounded-full px-10 py-2 text-rose-700 shadow-sm ring-1 ring-rose-200 transition hover:bg-rose-600 hover:font-semibold hover:text-white hover:shadow-lg">
							See More &nbsp; &#129035;
						</button>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Featuredjobs;
