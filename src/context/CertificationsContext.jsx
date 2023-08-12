import { useState, createContext } from 'react';

// Create certifications context
export const CertificationsContext = createContext();

// Create the certifications context provider
export const CertificationsProvider = (props) => {
	const [certifications, setCertifications] = useState([]);
	const [searchProject, setSearchProject] = useState('');

	// Search certifications by project title
	const searchCertificationsByTitle = certifications.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});
	return (
		<CertificationsContext.Provider
			value={{
				certifications,
				setCertifications,
				searchProject,
				setSearchProject,
				searchCertificationsByTitle,
			}}
		>
			{props.children}
		</CertificationsContext.Provider>
	);
};
