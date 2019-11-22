import React ,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UserPickJob = () => {

    const [jobsRank,setJobsRank] = useState([]);
    const [jobsDropDown, setJobsDropDown] = useState([]);

    /* GRAB INFORMATION FROM REDUCER*/
    const selectJob = useSelector(state => state.jobs.jobTrending);
    const jobsStateUsa = useSelector(state => state.jobs.jobCategoryDataUsa);
    const jobsStateCanada = useSelector(state => state.jobs.jobCategoryDataCanada);
    const countryToggle = useSelector(state => state.jobs.top3JobToggle);
    const isInTop3 = useSelector(state => state.jobs.isInTop3);

    const dispatch = useDispatch();

    useEffect(()=>{
        let remainData = [];
        //Fetch US data
        setJobsDropDown(jobsStateUsa);
        if(countryToggle)
        {
           remainData = jobsStateUsa;
        }
        //Fetch Canada data
        else
        {
           remainData = jobsStateCanada;
        }
        //console.log(remainData);
        setJobsRank(remainData);

    },[countryToggle,jobsStateUsa,jobsStateCanada]);

    const handleSelectJob = (e) => {
        const selectJobsSoc = Number(e.target.value);
        //console.log(selectJobsSoc);

        let jobIndex;
        //console.log(jobsRank);

        jobsRank.map((job, index) => {
            if (job.soc === selectJobsSoc){
                if(index < 3){
                    dispatch({type:"JOB_IS_IN_TOP_3"});
                }
                else{
                    dispatch({type:"JOB_IS_NOT_IN_TOP_3"});
                }
                //console.log(job.soc);
                jobIndex = index;
            }
            
            return job;
        })

        const job = jobsRank[jobIndex];

        
        //console.log(jobIndex);
        dispatch({type:"SELECT_TRENDING_JOB", payload:job})
        
    }    
    
    return (
        <li className="select-job-body trending-job-item">
            <p>Trending job category for user to choose</p>

            <p>Job Category</p>
            <select onChange={handleSelectJob}>
                <option value="" defaultValue disabled hidden>Job category</option>
            {jobsDropDown.map((job,index) => <option key={index} value={job.soc}>{job.name}</option>) }
            </select> 

            <div className="language-selected-info">
                {!isInTop3 ? (
                    <div className="job-data">
                    <p>Job Category: {selectJob.name}</p> 
                {/* <p>Ranking: {selectJob.languageRank}</p> */}
                    </div>
                    
                ) : (
                    <p>This job category is in the top 3. Choose another one.</p>
                )}
               
            </div>
        </li>
    )
}

export default UserPickJob