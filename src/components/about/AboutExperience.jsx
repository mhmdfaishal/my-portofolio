import AboutExperienceSingle from './AboutExperienceSingle';

const AboutExperience = ({jobs}) => {

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				Have work experience in
			</p>
			<div className="flex flex-col justify-center items-center mt-10 sm:mt-14 gap-2 ">
				{jobs.map((company) => (
					<AboutExperienceSingle
						title={company.company}
						image={company.logo.url}
						linkedin={company.companyLinkedin}
						website={company.companyUrl}
						key={company.id}
						designation={company.designation}
						from={company.from}
						to={company.to}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutExperience;
