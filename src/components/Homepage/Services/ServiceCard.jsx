import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		// <Link to={url}>
		// 	<div className='outline outline-sky-500 bg-slate-950 shadow-md shadow-slate-950 h-60 rounded-xl p-4 hover:shadow-lg hover:shadow-slate-800 hover:outline-sky-400 hover:[&_h2]:text-sky-300 hover:bg-slate-900 hover:duration-500'>
		// 		<h2 className='text-sky-400 text-2xl'>{title}</h2>
		// 		<p className='text-slate-100'>{description}</p>
		// 	</div>
		// </Link>
		<Link to={url}>
			<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 h-46 w-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
				<div className="flex flex-col gap-y-4">
					<h2 className='text-sky-950 font-semibold text-2xl'>{title}</h2>
					<p className='text-lg text-black pb-4'>{description}</p>
				</div>
				<div className='absolute bottom-3 right-3 outline-2 outline-slate-950 rounded-full p-2 size-fit self-end'>{icon}</div>
			</div>
		</Link>
	);
};

export default ServiceCard;
