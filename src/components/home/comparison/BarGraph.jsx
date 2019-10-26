import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraph = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const dataCanada = useSelector(state => state.languages.languagesCanada);
    const selectedLanguages = useSelector(state=> state.languages.selectedLanguages);

    const [barGraphData, setBarGraphData] = useState([]);
    const [barGraphKeys, setBarGraphKeys] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
    const selectedDataUsa = dataUsa.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));
    const selectedDataCanada = dataCanada.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));


    //set data format for bar-graph
    //USA
    const languageLocationUsa=selectedDataUsa.map(language => {
        let languageObject = language.name;
        return {[languageObject]: language.trend}
    })
    let languagesLocationUsa = {};
    for(let i = 0; i < languageLocationUsa.length; i++){
        let singleLanguage = languageLocationUsa[i];
        languagesLocationUsa = {...languagesLocationUsa, ...singleLanguage}
    }
    languagesLocationUsa = {country:'USA', ...languagesLocationUsa};

    //Canada
    const languageLocationCanada=selectedDataCanada.map(language => {
        let languageObject = language.name;
        return {[languageObject]: language.trend}
    })
    let languagesLocationCanada = {};
    for(let i = 0; i < languageLocationCanada.length; i++){
        let singleLanguage = languageLocationCanada[i];
        languagesLocationCanada = {...languagesLocationCanada, ...singleLanguage}
    }
    languagesLocationCanada = {country:'Canada', ...languagesLocationCanada};

    setBarGraphData([languagesLocationUsa, languagesLocationCanada])

    const languageKeys = selectedLanguages.map(language => language.languageName);

    setBarGraphKeys(languageKeys);
        
    }, [dataCanada, dataUsa, selectedLanguages])


    return (
            <ResponsiveBar
                data={barGraphData}
                keys
                ={barGraphKeys}
                indexBy="country"
                margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60
            }}
                padding={0.35}
                groupMode='grouped'
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
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
                axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'percentage of use',
                legendPosition: 'middle',
                legendOffset: -40
            }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                theme: 'background'
            }}
                legends={[{
                    dataFrom: 'keys',
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -39,
                    itemsSpacing: 2,
                    itemWidth: 109,
                    itemHeight: 22,
                    itemDirection: 'left-to-right',
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
        
 

export default BarGraph
