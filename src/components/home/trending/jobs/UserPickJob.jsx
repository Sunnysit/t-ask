import React from 'react';
import {useSelector} from 'react-redux';
import SelectJob from './SelectJob';

const UserPickJob = () => {

    /* GRAB INFORMATION FROM REDUCER*/
    const selectJob = useSelector(state => state.jobs.jobTrending);
    const isInTop3 = useSelector(state => state.jobs.isInTop3);

    return (
        <div className="select-job-body trending-job-item">
            <p className="select-job-instruction">Choose job category</p>

            <li className="tending-job-item-container">
                <SelectJob/>

                <div className="language-selected-info">
                    {!isInTop3
                        ? (
                            <div className="job-data">
                                <p className="rank-container">
                                    <span className="rank-text-job rank-4">#{selectJob.jobRank}</span>
                                </p>
                                <p className="job-description">{selectJob.description}</p>
                            </div>

                        )
                        : (
                            <p className="job-description on-top-job">This job category is in the top 3. Choose another one.</p>
                        )}

                </div>
            </li>
        </div>

    )
}

export default UserPickJob