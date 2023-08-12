import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = ({projects, courses}) => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 3 });
	useCountUp({ ref: 'projectsCounter', end: projects.length, duration: 3 });
	useCountUp({ ref: 'coursesCounter', end: courses.length, duration: 3 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Courses Completed"
					counter={<span id="coursesCounter" />}
				/>

			</div>
		</div>
	);
};

export default AboutCounter;
