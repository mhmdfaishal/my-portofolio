import {
	FiGithub,
	FiLinkedin,
	FiInstagram,
	FiMail,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/mhmdfaishaal',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/mhmdfaishal',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/mhmdfaishal',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">

				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl font-bold text-center text-primary-dark dark:text-primary-light mb-5">
						Reach Me
					</p>
					<div className='flex flex-col gap-4 justify-center'>
						<a
							href="mailto:haq.faishaldien@gmail.com"
							target="__blank"
							key="email"
							className="text-indigo-500 flex items-center gap-4 justify-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
						>
							<i className="text-xl sm:text-2xl md:text-3xl text-indigo-500 hover:text-gray-400">
								<FiMail />
							</i>
							<h1 className='text-sm sm:text-base md:text-lg font-general-medium text-indigo-500 hover:text-gray-400 dark:text-gray-300'>
								haq.faishaldien@gmail.com
							</h1>
						</a>
						<p className="text-3xl sm:text-3xl text-center font-bold text-primary-dark dark:text-primary-light mb-3 mt-4">
							Let's Connect!
						</p>
						<ul className="flex gap-4 sm:gap-8 justify-center">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="__blank"
									key={link.id}
									className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
								>
									<i className="text-xl sm:text-2xl md:text-3xl">
										{link.icon}
									</i>
								</a>
							))}
						</ul>
					</div>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
