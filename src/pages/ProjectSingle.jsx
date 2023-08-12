import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = ({projects}) => {

	// get projects data from path url
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);
	const relatedProjects = projects.filter((project) => project.id !== id);
	// limit relatedProjects just 4 projects
	relatedProjects.length = 4;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader project={project} />
				<ProjectGallery project={project} />
				<ProjectInfo project={project} />
				<ProjectRelatedProjects projects={relatedProjects} />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
