import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Script from 'next/script';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import { useQuery, gql } from "@apollo/client";
const About = lazy(() => import('./pages/AboutMe'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

export const QUERY = gql`
  {
    skills(first:20, orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image 
      url
    }
    certificates(first:20, orderBy: uniqueId_ASC) {
      uniqueId
      organization
      name
      id
      image 
      url
    }
    jobs(orderBy: from_ASC) {
      id
      company
      designation
      companyLinkedin
      companyUrl
      from
      to
      logo
    }
    projects(first:20, orderBy: uniqueId_ASC) {
      id
      title
      uniqueId
      description
      demoLink
      githubLink
      techStack 
      image
      publishDate
      tags
      galleries
      companyInfo
      objective
	    category 
    }
  }
`;


function App() {
	const { data, loading, error } = useQuery(QUERY);

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home projects={data.projects.slice(0,6)} />} />
							<Route path="projects" element={<Projects projects={data.projects}  />} />
							<Route path="certifications" element={<Certifications certifications={data.certificates}  />} />
							<Route
								path="projects/:id"
								element={<ProjectSingle projects={data.projects} />}
							/>

							<Route path="about" element={<About projects={data.projects} courses={data.certificates} jobs={data.jobs} />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');`}
      </Script>
			<Script src="/chatwoot.js" />
		</AnimatePresence>
	);
}

export default App;
