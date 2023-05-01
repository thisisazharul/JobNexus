import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
const Statistics = () => {
	const data = [
		{
			name: "A1",
			Marks: 57,
		},
		{
			name: "A2",
			Marks: 60,
		},
		{
			name: "A3",
			Marks: 60,
		},
		{
			name: "A4",
			Marks: 55,
		},
		{
			name: "A5",
			Marks: 59,
		},
		{
			name: "A6",
			Marks: 60,
		},
		{
			name: "A7",
			Marks: 60,
		},
		{
			name: "A8",
			Marks: 60,
		},
	];

	return (
		<div className="mx-auto h-[80vh] w-2/3 p-3 lg:px-16">
			<h3 className="py-5 text-center text-2xl font-semibold">
				Assignment Marks: Azharul Islam
			</h3>
			<hr className="mb-5" />
			<ResponsiveContainer
				width="100%"
				height={500}>
				<AreaChart
					width={100}
					height={200}
					data={data}
					syncId="anyId"
					margin={{
						top: 20,
						right: 0,
						left: 0,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray="5 5" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Marks"
						stroke="#fda4af"
						fill="#fff1f2"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;
