import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

// import a logo
import {logo} from './assets';

// import pages inside one line
import {Home, CreatePost} from './pages';


const App = () => {
	return (
		// A browserRouter 
			<BrowserRouter>
			{/* w-full is an acronm for full width (This is tailwind)*/}
				<header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
					<Link to="/">
						<img src={logo} alt="logo" className="w-28 object-contain" />
					</Link>

					<Link to="/posts" className="font-inter font-medium bg-[#6468ff] text-white px-4 py-2
					rounded-md">
						Create
					</Link>
				</header>

				<main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8f3] min-h-[calc(100vh-73px)]">

					{/* Render routes */}
					<Routes>
						{/* This route path is the destination */}
						<Route path="/" element={<Home/>} />

						<Route path="/posts" element={<CreatePost/>} />
					</Routes>
				</main>
			</BrowserRouter>
	);
};

export default App;
