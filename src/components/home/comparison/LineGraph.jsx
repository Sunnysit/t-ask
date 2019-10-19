import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import { ResponsiveLine } from '@nivo/line';


const LineGraph = () => {

    const [graphData,setGraphData] = useState([]);

    useEffect(() => {
        Axios.get('assets/language-data.json')
        .then(result => {
            const transferResult = result.data.map(item=>{
                    
                const languageDataSet = item.data.map(singleData=>{
                    
                    return {
                        x: `${singleData.searchYear}-${singleData.timePeriod}`,
                        y: singleData.repoCount,
                        year:singleData.searchYear,
                        timePeriod:singleData.timePeriod
                    }
                });
                //Sort order of the data based on year
                languageDataSet.sort((a, b)=>{
                    return a.year - b.year
                });
                return {
                    id: item.languageName,
                    data: languageDataSet
                }
            });

            setGraphData(transferResult);
        })
        
    },[])


    return ( 
    <div className="graph-container">
        <ResponsiveLine
        data={graphData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
        curve="natural"
        axisTop={null}
        axisRight={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Repository Amount',
            legendOffset: 70,
            legendPosition: 'middle'
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={null}
        colors={{ scheme: 'nivo' }}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -38,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 4,
                symbolSize: 10,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div> );
}
 
export default LineGraph;