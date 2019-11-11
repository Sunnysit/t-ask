import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphLangUSA = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const selectedLanguages = useSelector(state=> state.languages.selectedLanguages);

    const [barGraphData, setBarGraphData] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
    const selectedDataUsa = dataUsa.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));


    //set data format for bar-graph
    //USA
    const languageLocationUsa=selectedDataUsa.map(language => {
        return {id: language.name, value: language.trend}
    })

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

    return (
            <ResponsiveBar
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
                motionDamping={15}/>
    )
}
        
 

export default BarGraphLangUSA
