import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import an icon called preview
import { preview } from "../assets/";
import { getRandomPrompt } from "../utils";

// for the lay out
import { FormField, Loader } from "../components";

const CreatePost = () => {
	// initialize create post by creating a way to navigate to the home page once the post is created.
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		photo: "",
	});
	// This will be used while making contact with the API and while waiting to get back image
	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	// handles
	const handleSubmit = () => {
		console.log("submitted");
	};

	const handleChange = (e) => {};

	const handleSurpriseMe = () => {};


	return (
		<section className="max-w-8x1 mx-auto">
			<div>
				<h1 className="font-extrabold text-[#222329] text-[32px]">Create</h1>

				<p className="mt-2 text-[#666e74] text-[16px] max-w[500px]">
					Create imaginative and visually stunning images through by DALL-E AI
					and share them with the community
				</p>
			</div>

			<form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						lableName="Your Name"
						type="text"
						name="name"
						placeholder="John Doe"
						value={form.name}
						handleChange={handleChange}
					/>

					<FormField
						lableName="Prompt"
						type="text"
						name="prompt"
						placeholder="A man standing in front of a stargate to another dimension"
						value={form.prompt}
						handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
					/>
				</div>
			</form>
		</section>
	);
};

export default CreatePost;
