import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphLangCanada = () => {

    const dataCanada = useSelector(state => state.languages.languagesCanada);
    const selectedLanguages = useSelector(state=> state.languages.selectedLanguages);

    const [barGraphData, setBarGraphData] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
    const selectedDataCanada = dataCanada.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));


    //set data format for bar-graph
    const languageLocationCanada=selectedDataCanada.map(language => {
        return {id:language.name, value: language.trend}
    })
    const languagesLocationCanada = [
        {
            ...languageLocationCanada[0],
            color: '#F55216'
        },
        {
            ...languageLocationCanada[1],
            color: '#00A300'
        },
        {
            ...languageLocationCanada[2],
            color: '#681B7F'
        }
    ]

    setBarGraphData(languagesLocationCanada)
        
    }, [dataCanada, selectedLanguages]);

    //set bar colors
    const getBarColor = bar => {
        return bar.data.color;
    }
    ;

    const hiddenTick = (e) => {
        const tickValue = e / 2;
        const isOdd = tickValue % 2;
        let showTick = true;
        if(isOdd === 1){
            showTick = false;
        }
        return showTick;
    }



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
                layout='horizontal'
                reverse={true}
                colors={getBarColor}
                borderColor="black"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: tick => (hiddenTick(tick) ? tick : ''),
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
                animate={true}
                motionStiffness={90}
                motionDamping={15}/>
    )
}
        
 

export default BarGraphLangCanada
