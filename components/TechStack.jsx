import React from "react";
import content from "../content/content";

const TechStack = () => {
	return (
		<div className="w-10/12 mx-auto flex flex-col text-center">
			<div className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-10">
				{content.techstack.map((tech, index) => {
					return (
						<div key={index} className="m-auto">
							<span className="bg-white shadow-lg m-2 rounded-full">
								<img className="h-18 md:h-24" src={tech.img} alt={tech.name} />
								<h4 className="mt-1 text-sm text-darkgrey">{tech.name}</h4>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TechStack;