import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
	const [loading, setloading] = useState(false);
	const [allPosts, setAllPosts] = useState(null);

	const [searchText, setSearchText] = useState("saf");

	return (
		<section className="max-w-7x1 mx-auto ">
			<div>
				<h1 className="font-extrabold text-[#222329] text-[32px]">
					The Community Showcase
				</h1>

				<p className="mt-2 text-[#666e74] text-[16px] max-w[500px]">
					Browse through a collection of imaginative and visually stunning
					images generated by DALL-E AI
				</p>
			</div>

			<div className="mt-16">
				<FormField />
			</div>

			<div className="mt-10">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className="font-medium text-[#666e75]  mb-3">
								Showing results for <span className="text-[#222328]">
                  {searchText}
                </span>
							</h2>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
