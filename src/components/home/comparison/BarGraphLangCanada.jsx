import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphLangCanada = () => {

    const dataCanada = useSelector(state => state.languages.languagesCanada);
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
        return {[languageObject]: language.trend}
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
                right: 60,
                bottom: 50,
                left: 60
            }}
                padding={0.35}
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
        
 

export default BarGraphLangCanada
