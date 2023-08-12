import { motion } from 'framer-motion';

const CertificationSingle = ({ name, image, url }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -180 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.20,
			}}
		>
			<a href={url} aria-label="Single Certificate">
				<div className="rounded-xl shadow-lg  h-400 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none h-300 w-full"
							alt="Single Certificate"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{name}
						</p>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export default CertificationSingle;
