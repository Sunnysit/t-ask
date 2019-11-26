import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const SelectJob = () => {

    /*set useRef*/
    const nameRef = useRef(null);
    const dispatch = useDispatch();

    const [jobsRank,
        setJobsRank] = useState([]);
    const [jobsDropDown,
        setJobsDropDown] = useState([]);
    const [dropDown,
        setDropDown] = useState(true);

    const selectJob = useSelector(state => state.jobs.jobTrending);
    const jobsStateUsa = useSelector(state => state.jobs.jobCategoryDataUsa);
    const jobsStateCanada = useSelector(state => state.jobs.jobCategoryDataCanada);
    const countryToggle = useSelector(state => state.jobs.top3JobToggle);

    useEffect(() => {
        let remainData = [];
        //Fetch US data

        let dataUsa = jobsStateUsa.map((job, index) => {
            if (index === 0) {
                return {
                    ...job,
                    isSelect: true
                }
            }
            return ({
                ...job,
                isSelect: false
            })
        })

        setJobsDropDown(dataUsa);

        if (countryToggle) {
            remainData =//Fetch Canada data
            jobsStateUsa;
        } else {
            remainData = jobsStateCanada;
        }

        let remainDataComplete = remainData.map(language => {
            return ({
                ...language,
                isSelect: false
            })
        })

        setJobsRank(remainDataComplete);

    }, [countryToggle, jobsStateUsa, jobsStateCanada]);

    let handleDropDown = (e) => {
        if (nameRef.current.contains(e.target)) {
            setDropDown(!dropDown);
        }
    }

    const handleSelectJob = (e) => {
        const selectJobsSoc = Number(e.target.value);

        let jobIndex;

        const selectedJob = jobsDropDown.map((job, index) => {
            if (job.soc === selectJobsSoc) {
                job.isSelect = !job.isSelect;
                jobIndex = index;
            } else {
                job.isSelect = false;
            }

            return job;
        })

        setJobsDropDown(selectedJob);

        jobsRank.map((job, index) => {
            if (job.soc === selectJobsSoc) {
                if (index < 3) {
                    dispatch({type: "JOB_IS_IN_TOP_3"});
                } else {
                    dispatch({type: "JOB_IS_NOT_IN_TOP_3"});
                }
                jobIndex = index;
            }
            return job;
        })

        const job = jobsRank[jobIndex];
        //console.log(language);
        dispatch({type: "SELECT_TRENDING_JOB", payload: job});
        setDropDown(!dropDown);

    }

    //console.log(languagesDropDown);

    return (
        <div className="select-job" ref={nameRef}>
            <div className="select-job-list">
                <button onClick={handleDropDown} className=" job-name drop-down-menu">{selectJob.name}
                    <span className="drop-down-icon">&#9662;</span>
                </button>
                {/* <select onChange={handleSelectLanguage} className="language-name">
                <option value="" defaultValue disabled hidden>Language</option>
            { languagesDropDown.map((language,index) => <option key={index} value={language.languageId}>{language.languageName}</option>) }
            </select>  */}
                {!dropDown
                    ? (

                        <div className="drop-down active">
                            <ul className="jobs">
                                {jobsDropDown.map(job => <li
                                    className={job.isSelect
                                    ? 'selected'
                                    : null}
                                    onClick={handleSelectJob}
                                    value={job.soc}
                                    key={job.soc}>{job.name}
                                    <span>&#10004;</span>
                                </li>)}
                            </ul>
                        </div>
                    )
                    : (
                        <div className="drop-down"></div>
                    )}
            </div>

        </div>
    )
}

export default SelectJob