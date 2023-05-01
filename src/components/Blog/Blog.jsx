import React from "react";

const Blog = () => {
	return (
		<div className="mx-auto h-[70vh] w-2/3 ">
			<h3 className="mb-2 py-4 text-center text-3xl font-bold">
				Blog Page: Q&A for Assignment 09
			</h3>
			<hr />
			<div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 lg:px-16">
				<div className="cursor-pointer border-2 p-4 shadow-sm hover:bg-rose-50 hover:shadow-lg ">
					<h3 className="text-1xl py-3 font-semibold">
						1. When should you use context API??
					</h3>
					<p>
						<span className="font-semibold">Answer:</span> Context API should be
						used to share data with multiple components, without having to pass
						data through props manually1. Some use cases where Context API is
						ideal for include theming, user language, authentication, etc.
					</p>
				</div>
				<div className="cursor-pointer border-2 p-4 shadow-sm hover:bg-rose-50 hover:shadow-lg">
					<h3 className="text-1xl py-3 font-semibold">
						2. What is a custom hook?
					</h3>
					<p>
						<span className="font-semibold">Answer:</span> A custom hook is a
						JavaScript function whose name starts with “use” and that may call
						other hooks4. It allows you to extract component logic into reusable
						functions. Custom hooks can be used for many things like fetching
						data, managing state, handling events, etc.
					</p>
				</div>
				<div className="cursor-pointer border-2 p-4 shadow-sm hover:bg-rose-50 hover:shadow-lg">
					<h3 className="text-1xl py-3 font-semibold">3. What is useRef?</h3>
					<p>
						<span className="font-semibold">Answer:</span> useRef is a hook in
						React that returns a mutable ref object whose .current property is
						initialized to the passed argument (initialValue). The returned
						object will persist for the full lifetime of the component. useRef
						can be used for many things like accessing DOM nodes or storing any
						mutable value.
					</p>
				</div>
				<div className="cursor-pointer border-2 p-4 shadow-sm hover:bg-rose-50 hover:shadow-lg">
					<h3 className="text-1xl py-3 font-semibold">4. What is useMemo?</h3>
					<p>
						<span className="font-semibold">Answer:</span> useMemo is another
						hook in React that allows you to optimize expensive calculations by
						caching their results. useMemo takes two arguments: a function that
						returns a value and an array of dependencies. useMemo will only
						recompute the memoized value when one of the dependencies has
						changed.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
