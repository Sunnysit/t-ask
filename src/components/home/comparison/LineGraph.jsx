import React ,{useState,useEffect} from 'react';
import { useSelector} from 'react-redux';
import { ResponsiveLine } from '@nivo/line';


const LineGraph = () => {

    const [graphData,setGraphData] = useState([]);
    const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    const languageTimeSpan = useSelector(state => state.languages.languageTimeSpan);

    useEffect(() => {

        let transferResult = [];

        selectLanguages.map(lang=>{
          
               const targetData = languageTimeSpan.find(langData => lang.languageName === langData.language.name)
         
                if(targetData)
                {
                    let timeSpansArray = targetData.timeSpansArray;
                    
                    const languageDataSet = timeSpansArray.map(singleSpan=>{
                            return {
                            x: `${singleSpan.start.substring(0, 4)}-${singleSpan.start.substring(5,7)}`,
                            y: singleSpan.total,
                            year:singleSpan.start.substring(0, 4),
                            timePeriod:singleSpan.id_timespan
                            }
                    });

                    languageDataSet.sort((a, b)=>{
                                    return a.year - b.year
                                });
                  

                    transferResult.push({
                        id: targetData.language.name,
                        data:languageDataSet
                    });
                }
                
               
         
        })

        setGraphData(transferResult);
    },[selectLanguages,languageTimeSpan])


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