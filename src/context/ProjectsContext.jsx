import { useState, createContext } from 'react';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	return (
		<ProjectsContext.Provider
			value={{
				searchProject,
				setSearchProject,
				selectProject,
				setSelectProject,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
