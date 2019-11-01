import React ,{useState,useEffect} from 'react';
import { useSelector} from 'react-redux';
import { ResponsiveLine } from '@nivo/line';


const LineGraphJob = () => {

    const [graphData,setGraphData] = useState([]);
    const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    const jobTimeSpan = useSelector(state => state.jobs.jobsTimeSpan);

    useEffect(() => {

        let transferResult = [];

        selectLanguages.map(lang=>{
          
               const targetData = jobTimeSpan.find(langData => lang.languageName === langData.language.name)
         
                if(targetData)
                {
                    let timeSpansArray = targetData.timeSpansArray;
                    let languageDataSet = [];
                    for(let i=0;i<9;i++)
                    {   
                
                        let time = Math.floor(2015+(i/2));
                        if(i%2===0)
                        {
                            time += '-01'
                        }
                        else{
                            time += '-07'
                        }

                        let yValue = 0;

                        //Update job Total count for Y axis
                        timeSpansArray.forEach(singleSpan => {
                            let spanPeriod = `${singleSpan.start.substring(0, 4)}-${singleSpan.start.substring(5,7)}`;
                            if(spanPeriod === time)
                            {
                                yValue = singleSpan.totalJobs;
                            }
                        });

                        languageDataSet.push({
                            x: time,
                            y:yValue,
                           
                        })
                    }


                    transferResult.push({
                        id: targetData.language.name,
                        data:languageDataSet
                    });
                }
                
               return null;
         
        })

        setGraphData(transferResult);
    },[selectLanguages,jobTimeSpan])


    return ( 
    <div className="line-graph-job-container">
        <ResponsiveLine
        data={graphData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
        curve="linear"
        axisTop={null}
        axisRight={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Job Amount',
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
 
export default LineGraphJob;