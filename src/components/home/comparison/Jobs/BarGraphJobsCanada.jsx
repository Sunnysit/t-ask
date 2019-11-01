import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphJobsCanada = () => {

    const dataCanada = useSelector(state => state.jobs.jobsCanada);
    const selectedLanguages = useSelector(state=> state.languages.selectedLanguages);

    const [barGraphData, setBarGraphData] = useState([]);
    const [barGraphKeys, setBarGraphKeys] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
    const selectedDataCanada = dataCanada.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));


    //set data format for bar-graph
    //Canada
    const languageLocationCanada=selectedDataCanada.map(language => {
        let languageObject = language.name;
        return {[languageObject]: language.totalJobs}
    })
    let languagesLocationCanada = {};
    for(let i = 0; i < languageLocationCanada.length; i++){
        let singleLanguage = languageLocationCanada[i];
        languagesLocationCanada = {...languagesLocationCanada, ...singleLanguage}
    }
    languagesLocationCanada = {country:'Canada', ...languagesLocationCanada};

    setBarGraphData([languagesLocationCanada])

    const languageKeys = selectedLanguages.map(language => language.languageName);

    setBarGraphKeys(languageKeys);
        
    }, [dataCanada, selectedLanguages])


    return (
            <ResponsiveBar
                data={barGraphData}
                keys
                ={barGraphKeys}
                indexBy="country"
                margin={{
                top: 50,
                right: 65,
                bottom: 50,
                left: 10
            }}
                padding={0.1}
                innerPadding={10}
                minValue={0}
                maxValue={100}
                groupMode='grouped'
                layout='horizontal'
                reverse={true}
                colors={{
                scheme: 'nivo'
            }}
                borderColor="black"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Canada',
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
                legends={[{
                    dataFrom: 'keys',
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 40,
                    translateY: 0,
                    itemsSpacing: 40,
                    itemWidth: 10,
                    itemHeight: 22,
                    itemDirection: 'top-to-bottom',
                    itemOpacity: 0.85,
                    symbolSize: 12,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
                
                animate={true}
                motionStiffness={90}
                motionDamping={15}/>
    )
}
        
 

export default BarGraphJobsCanada
