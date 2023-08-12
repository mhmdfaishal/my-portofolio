import CertificationsGrid from '../components/certifications/CertificationsGrid';
import { CertificationsProvider } from '../context/CertificationsContext';

const Certifications = ({certifications}) => {
	return (
		<CertificationsProvider>
			<div className="container mx-auto">
				<CertificationsGrid certifications={certifications} />
			</div>
		</CertificationsProvider>
	);
};

export default Certifications;
