import { Link } from 'react-router-dom';

const ProjectRelatedProjects = ({projects}) => {

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Related Projects
			</p>

				<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
					{projects.map((project) => {
						return (
							<Link to={"/projects/" + project.id} aria-label="Single Project">
								<img
									src={project.image.url}
									className="rounded-xl cursor-pointer h-200 w-full"
									alt={project.title}
									key={project.id}
								/>
							</Link>
						);
					})}
				</div>


		</div>
	);
};

export default ProjectRelatedProjects;
