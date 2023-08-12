const ProjectInfo = ({project}) => {
	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						About Client
					</p>
					<ul className="leading-loose">
						{project.companyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href={info.title === 'Website' ? info.url : ''}
											target="_blank"
											rel="noreferrer"
											className={
												info.title === 'Website'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>

				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Objective
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{project.objective}
					</p>
				</div>

				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{project.techStack.map((tech, idx) => {
							if (idx === project.techStack.length - 1) {
								if (tech.text === 'All') {
									return '';
								}
								return tech.text;
							} else {
								if (idx === project.techStack.length - 2) {
									return tech.text;
								}
								return tech.text + ', ';
							}
						})
						}
					</p>
				</div>
				{project.demoLink !== '' ?
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Demo Link
						</p>
						<a href={project.demoLink} rel="noreferrer" target="_blank" className="font-general-regular text-primary-dark dark:text-ternary-light hover:underline hover:text-indigo-500 dark:hover:text-indigo-400">
							{project.demoLink}
						</a>
					</div>
				: ''}
			</div>

			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Description
				</p>
				<p
					key={project.id}
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					{project.description}
				</p>
			</div>
		</div>
	);
};

export default ProjectInfo;
