import {
	FiLinkedin,
	FiGlobe,
} from 'react-icons/fi';

const AboutExperienceSingle = ({ designation,from,to, title, image, linkedin, website }) => {
	return (
		<>
		<div className="border w-50-percent items-center flex flex-col py-3 justify-center text-center bg-ternary-teal-glass border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer">
			<div className="flex flex-col gap-4 items-center">
				<img
					src={image}
					className="w-40"
					alt={title}
				/>				
				<div className="flex flex-col items-center">
					<h1 className="text-lg-sm sm:text-sm md:text-lg text-navy font-bold dark:text-white">
						{designation}
					</h1>
					<div className="flex mt-2">
						<h1 className="text-lg-sm sm:text-lg-ssm md:text-sm text-indigo-500 font-bold dark:text-indigo-500 mr-2">
							{
								new Date(from).toDateString().split(' ')[1] + ' ' + new Date(from).toDateString().split(' ')[3]
							}
						</h1>
						<h1 className="text-lg-sm sm:text-lg-sm md:text-sm text-indigo-500 font-bold dark:text-indigo-500">
							-
						</h1>
						<h1 className="text-lg-sm sm:text-lg-sm md:text-sm text-indigo-500 font-bold dark:text-indigo-500 ml-2">
							{
								to === null ? 'Present' :
								new Date(to).toDateString().split(' ')[1] + ' ' + new Date(to).toDateString().split(' ')[3]
							}
						</h1>
					</div>
				</div>
				<ul className="flex justify-center w-full gap-4 sm:gap-8">
					<a
						href={linkedin}
						target="__blank"
						className="text-navy dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 mt-5 cursor-pointer shadow-sm duration-300"
					>
						<i className="text-xl sm:text-2xl md:text-3xl">
							<FiLinkedin />
						</i>
					</a>
					<a
						href={website}
						target="__blank"
						className="text-navy dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 mt-5 cursor-pointer shadow-sm duration-300"
					>
						<i className="text-xl sm:text-2xl md:text-3xl">
							<FiGlobe />
						</i>
					</a>
				</ul>

			</div>
		</div>
		</>
	);
};

export default AboutExperienceSingle;
