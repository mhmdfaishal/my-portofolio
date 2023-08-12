import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ id, title, category, image, techStack }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={"/projects/" + id} aria-label="Single Project">
				<div className="rounded-xl shadow-lg  h-400 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark-glass">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none h-300 w-full"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
