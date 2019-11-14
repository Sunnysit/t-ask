import React ,{useState,useEffect} from 'react';
import { useSelector} from 'react-redux';
import { ResponsiveLine } from '@nivo/line';


const LineGraphJob = () => {

    const [graphData,setGraphData] = useState([]);
    const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    const jobTimeSpan = useSelector(state => state.jobs.jobsTimeSpan);

    useEffect(() => {

        let transferResult = [];

        let colorsArray =['#F55216', '#00A300', '#681B7F'];

        selectLanguages.map((lang, index)=>{
          
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
                        data:languageDataSet,
                        color: colorsArray[index]
                    });
                }
                
               return null;
         
        })

        setGraphData(transferResult);
    },[selectLanguages,jobTimeSpan]);

    //get line color
    const getLineColor = line => {
        //console.log(line)
        return line.color;
    }

    const hiddenTick = (e) => {
        const tickValue = e.substring(5,7);
        let showTick = true;
        if(tickValue === '07'){
            showTick = false;
        }
        return showTick;
    }

    return ( 
    <div className="line-graph-job-container">
        <ResponsiveLine
        data={graphData}
        margin={{ top: 50, right: 90, bottom: 50, left: 25 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
        curve="natural"
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
            format: tick => (hiddenTick(tick) ? tick : ''),
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={null}
        colors={getLineColor}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
    />
    </div> );
}
 
export default LineGraphJob;