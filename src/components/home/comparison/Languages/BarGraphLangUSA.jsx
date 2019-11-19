import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraphLangUSA = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const selectedLanguages = useSelector(state => state.languages.selectedLanguages);

    const [barGraphData,
        setBarGraphData] = useState([]);

    useEffect(() => {
        //filter data from the selectedLanguages
        const selectedDataUsa = dataUsa.filter(language => selectedLanguages.find(lang => lang.languageName === language.name));

        //set data format for bar-graph USA
        const languageLocationUsa = selectedDataUsa.map(language => {
            return {id_language: language.id_language, id: language.name, value: language.trend}
        })

        languageLocationUsa.sort((a,b) => {
            return a.id_language - b.id_language;
        })

        const languagesLocationUsa = [
            {
                ...languageLocationUsa[0],
                color: '#F55216'
            }, {
                ...languageLocationUsa[1],
                color: '#00A300'
            }, {
                ...languageLocationUsa[2],
                color: '#681B7F'
            }
        ]

        languagesLocationUsa.sort((a,b) => {
            return a.id_language - b.id_language;
        })

        setBarGraphData(languagesLocationUsa)

    }, [dataUsa, selectedLanguages]);

    //set bar colors
    const getBarColor = bar => {
        return bar.data.color;
    };

    const hiddenTick = (e) => {
        const tickValue = e / 2;
        const isOdd = tickValue % 2;
        let showTick = true;
        if (isOdd === 1) {
            showTick = false;
        }
        return showTick;
    }


    const customTooltip = (bar) => <span>
        <span
            style={{
            "backgroundColor": bar.data.color,
            width: 10,
            height: 10,
            "display": "inline-block",
            "marginRight": 8
        }}></span>{bar.data.id}:
        <strong>
            {bar.data.value}%</strong>
    </span>;

    return (<ResponsiveBar
        data={barGraphData}
        keys={["value"]}
        indexBy="id"
        margin={{
        top: 20,
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
        format: tick => (hiddenTick(tick)
            ? tick
            : ''),
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
        tooltip={customTooltip}
        animate={true}
        motionStiffness={90}
        motionDamping={15}/>)
}

export default BarGraphLangUSA
