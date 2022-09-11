import type { NextPage } from "next";
import { IJobs, Months, Theme } from "../typings";
import linkedin from "../assets/linkedin.webp";
import www from "../assets/www.png";
import { useEffect, useState } from "react";
interface IJobsProps {
  jobs: IJobs[];
}

export const Jobs: NextPage<IJobsProps> = ({ jobs }) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const data = localStorage.getItem("themeValue");
    setTheme(data === "light" || !data ? "light" : "dark");
    
  }, []);


  return (
    <>
      <h1 className="jobs_heading">Experiences</h1>

      <div className="jobs_timeline_container">
        {jobs?.map(job => (
          <div className="job" key={job?.id} data-aos="fade-right">
            <h2>{job?.company}</h2>
            <h3>{job?.designation}</h3>
            {job?.logo?.url ? 
            <img src={job?.logo?.url} alt="" className="job_companyLogo" />
            :
            theme === "light" ? <img src={job?.logo?.url_dark} alt="" className="job_companyLogo" /> : <img src={job?.logo?.url_light} alt="" className="job_companyLogo" />
            }
            <div className="job_date_beforeLine">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`}
            </div>
            <div className="job_date">
              {`${Months[parseInt(job?.from?.split("-")[1])]}, ${job?.from?.split("-")[0]}`} -{" "}
              {job?.to
                ? `${Months[parseInt(job?.to?.split("-")[1])]}, ${job?.to?.split("-")[0]}`
                : "Present"}
            </div>
            <div className="job_companyLinks">
              <img
                src={linkedin?.src}
                alt=""
                onClick={() => window.open(job?.companyLinkedin, "_blank")}
              />
              <img src={www?.src} alt="" onClick={() => window.open(job?.companyUrl, "_blank")} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
