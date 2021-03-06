import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Top3Switch from '../Top3Switch';
import UserPickJob from './UserPickJob';

const Top3Jobs = () => {
    const [top3Jobs,
        setTop3Jobs] = useState([])

    const jobStateUsa = useSelector(state => state.jobs.jobCategoryDataUsa);
    const jobStateCanada = useSelector(state => state.jobs.jobCategoryDataCanada);
    const countryToggle = useSelector(state => state.jobs.top3JobToggle);

    useEffect(() => {

        let top3JobArray = [];
        //Fetch USA trending
        if (countryToggle) {
            if (jobStateUsa.length >= 3) {

                //Change list order base on the job amount
                jobStateUsa.sort((a, b)=>{
                    return b.totalJobs - a.totalJobs
                });

                for (let i = 0; i < 3; i++) {
                    top3JobArray.push(jobStateUsa[i]);
                }
                setTop3Jobs(top3JobArray)
            }
        } 
        //Fetch Canada trending;
        else {
            if (jobStateCanada.length >= 3) {

                //Change list order base on the job amount
                jobStateCanada.sort((a, b)=>{
                    return b.totalJobs - a.totalJobs
                });

                for (let i = 0; i < 3; i++) {
                    top3JobArray.push(jobStateCanada[i]);
                }
                setTop3Jobs(top3JobArray);
            }
        }

        // console.log(jobStateCanada,jobStateUsa);

    }, [jobStateUsa, jobStateCanada, countryToggle]);

    return (
        <section className="trending-job-section">
            <div className="switch-container">
                <span className="comparison-text">Show top job positions in: </span><Top3Switch type="job" toggle={countryToggle} />
            </div>
            <div className="trending-job-container">
                <ul className="trending-job-list">
                    {top3Jobs.map((job,index) => {

                        let rankClassName = `rank-text-job rank-${index+1}`;

                        return <li key={job.soc} className="trending-job-item tending-job-item-container">
                            <p className="job-name">{job.name}</p>
                            <p className="rank-container">
                                <span className={rankClassName}>#0{index+1}</span>
                                {/* <img
                                    className="language-logo"
                                    src={lang.logoUrl}
                                    alt={job.name}/> */}
                            </p>
                            <p className="job-description">{job.description}</p>
                        </li>
                    })
}
                 <UserPickJob />
                </ul>
            </div>
        </section>

    );
}
 
export default Top3Jobs;