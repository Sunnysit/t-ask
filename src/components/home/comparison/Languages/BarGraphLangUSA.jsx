import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphLangUSA = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const selectedLanguages = useSelector(state=> state.languages.selectedLanguages);

    const [barGraphData, setBarGraphData] = useState([]);
    const [barGraphKeys, setBarGraphKeys] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
    const selectedDataUsa = dataUsa.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));


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


    setBarGraphData([languagesLocationUsa])

    const languageKeys = selectedLanguages.map(language => language.languageName);

    setBarGraphKeys(languageKeys);
        
    }, [dataUsa, selectedLanguages])


    return (
            <ResponsiveBar
                data={barGraphData}
                keys
                ={barGraphKeys}
                indexBy="country"
                margin={{
                top: 50,
                right: 10,
                bottom: 50,
                left: 10
            }}
                padding={0.1}
                innerPadding={6}
                minValue={0}
                maxValue={100}
                groupMode='grouped'
                colors={{
                scheme: 'nivo'
            }}
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
