import React from 'react';
import {useSelector} from 'react-redux';

import {ResponsiveBar} from '@nivo/bar';

const BarGraph = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const dataCanada = useSelector(state => state.languages.languagesCanada);

    const barGraphData = [dataUsa, dataCanada]; console.log(barGraphData);

    return (
        <div className="bar-graph-container">
            <ResponsiveBar
                data={barGraphData}
                keys
                ={[
                "Java",
                "C++",
                "Javascript",
                "C#",
                "Python",
                "PHP",
                "Ruby",
                "Go",
                "R",
                "Typescript",
                "Swift",
                "Matlab",
                "Kotlin",
                "Rust",
                "Objective-C",
                "visual-basic"
            ]}
                indexBy="country"
                margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60
            }}
                padding={0.3}
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
        </div>
    );
}

export default BarGraph
