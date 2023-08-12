import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = ({projects}) => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid projects={projects} />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
