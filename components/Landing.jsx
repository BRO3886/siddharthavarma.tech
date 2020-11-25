import { React, useEffect, useState } from "react";
import content from "../content/content";
import Typical from "react-typical";

const Landing = () => {
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		setAnimated(true);
	}, []);

	return (
		<div className="flex items-center justify-center" style={{ height: "80vh" }}>
			<div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
				<div className="w-8/12 md:w-3/12 m-3">
					<img
						className="rounded-full"
						src={content.landing.img.url}
						alt={content.landing.img.alt}
					></img>
				</div>
				<div className="text-black text-center md:text-left">
					<h2
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
					>
						{content.landing.text[0]}
						<br />
						{content.landing.text[1]} <span className="text-blue">{content.landing.text[2]}</span>
					</h2>
					<h1 className="text-grey text-xl">
						{content.landing.text[3]}{" "}
						<Typical
							steps={content.landing.typical}
							loop={Infinity}
							className="inline-block text-grey"
						/>
					</h1>
					<button className="bg-lightblue px-10 py-3 mt-10 rounded-lg text-blue font-medium capitalize hover:bg-blue hover:text-white  border border-transparent">
						{content.landing.btnText.toUpperCase()}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Landing;
