import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphJobsUSA = () => {

    const dataUsa = useSelector(state => state.jobs.jobsUsa);
    const selectedLanguages = useSelector(state => state.languages.selectedLanguages);

    const [barGraphData,
        setBarGraphData] = useState([]);

    useEffect(() => {
        //normalize data as percentage
        let mostJobs = 0
        for (let i = 0; i < dataUsa.length; i++) {
            if (dataUsa[i].totalJobs > mostJobs) {
                mostJobs = dataUsa[i].totalJobs;
            }
        }

        //console.log(mostJobs);

        const dataPercentageUsa = dataUsa.map(language => {
            let percentageJobs = parseFloat(((language.totalJobs * 100) / mostJobs).toFixed(2));
            return {id_language: language.id_language, name: language.name, totalJobs: percentageJobs}
        });

        //console.log(dataPercentageUsa); filter data from the selectedLanguages
        const selectedDataUsa = dataPercentageUsa.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));

        //set data format for bar-graph USA
        const languageLocationUsa = selectedDataUsa.map(language => {
            return {country: 'Canada', id: language.name, value: language.totalJobs}
        });

        const languagesLocationUsa = [
            {
                ...languageLocationUsa[0],
                color: '#F55216'
            },
            {
                ...languageLocationUsa[1],
                color: '#00A300'
            },
            {
                ...languageLocationUsa[2],
                color: '#681B7F'
            }
        ]

        setBarGraphData(languagesLocationUsa)

    }, [dataUsa, selectedLanguages]);

    //set bar colors
    const getBarColor = bar => {
        return bar.data.color;
    }
    ;

    //console.log(barGraphData);

    return (<ResponsiveBar
        data={barGraphData}
        keys={["value"]}
        indexBy="id"
        margin={{
        top: 50,
        right: 10,
        bottom: 50,
        left: 10
    }}
        padding={0.1}
        innerPadding={10}
        minValue={0}
        maxValue={100}
        groupMode='grouped'
        colors={getBarColor}
        borderColor="black"
        layout='horizontal'
        axisTop={null}
        axisRight={null}
        axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'USA',
        legendPosition: 'middle',
        legendOffset: 32
    }}
        axisLeft={null}
        enableGridX={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
        theme: 'background'
    }}
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}/>)
}

export default BarGraphJobsUSA
