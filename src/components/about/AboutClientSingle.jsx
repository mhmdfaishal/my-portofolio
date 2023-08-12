const AboutClientSingle = ({ title, image }) => {
	return (
		<>
		<div className="border items-center flex justify-center text-center bg-ternary-teal-glass border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer">
			<img
				src={image}
				className="w-40"
				alt={title}
			/>
		</div>
		</>
	);
};

export default AboutClientSingle;
