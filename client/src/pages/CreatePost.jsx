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

  // NOTE: Generators

  const generateImg = async () => {
	if(form.prompt) {
	  try {
		setGeneratingImg(true);
		console.log('I am client here 1');
		const response = await fetch('http://localhost:8080/api/v1/dalle', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			prompt: form.prompt,
		  }),
		});
		console.log('I am client here 2');
  
		if (!response.ok) {
		  throw new Error(`Failed to fetch image: ${response.statusText}`);
		}
  
		const data = await response.json();
		setForm({...form, photo:`data:image/jpeg;base64,${data.photo}`});
		console.log('I am client here 3');
	  } catch (error) {
		alert(error);
	  } finally {
		setGeneratingImg(false);
	  }
	} else {
	  alert ('May you please enter a prompt?');
	}
  };
  

	// NOTE: Handles

	const handleSubmit = () => {
		console.log("submitted");
	};

	const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

	const handleSurpriseMe = () => {
    const randomPrompt  = 	getRandomPrompt(form.prompt);
    setForm({...form, prompt: randomPrompt});

  };

  // NOTE: ----------------------------


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
						labelName="Your Name"
						type="text"
						name="name"
						placeholder="John Doe"
						value={form.name}
						handleChange={handleChange}
					/>

					<FormField
						labelName="Prompt"
						type="text"
						name="prompt"
						placeholder="A man standing in front of a stargate to another dimension"
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>

					{/* create the place where the ai generative image will be shown */}
					<div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className="w-full h-full object-contain"
							/>
						) : (
							<img
								src={preview}
								alt="preview"
								className="w-9/12 h-9/12 object-contain"
							/>
						)}

            {/* create a loader while the image is being generated */}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                 <Loader/>
              </div>
            )}
					</div>
				</div>

        {/* create a way to submit the form */}
        <div className="mt-5 flex gap-5 ">
            <button 
            type="button"
            onClick={generateImg}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center "
            >

              {generatingImg ? 'Generating Image ...' : 'Generate '}

            </button>
        </div>

        <div className="mt-10">
              <p className="mt-2 text-[#666e75] text-[14px]">
                Once you have create the image you want, you cn share it with others in the community
              </p>

              <button type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full px-5 py-2.5 text-center "

              >
                {loading ? 'Sharing...' : 'Share Images'}

              </button>
        </div>

			</form>
		</section>
	);
};

export default CreatePost;
