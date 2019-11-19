import React ,{useState,useEffect} from 'react';
import { useSelector} from 'react-redux';
import { ResponsiveLine } from '@nivo/line';


const LineGraph = () => {

    const [graphData,setGraphData] = useState([]);
    const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    const languageTimeSpan = useSelector(state => state.languages.languageTimeSpan);

    useEffect(() => {

        let transferResult = [];

        let colorsArray =['#F55216', '#00A300', '#681B7F'];

        selectLanguages.map((lang, index) =>{
          
               const targetData = languageTimeSpan.find(langData => lang.languageName === langData.language.name)
         
                if(targetData)
                {
                    let timeSpansArray = targetData.timeSpansArray;
                    
                    const languageDataSet = timeSpansArray.map(singleSpan=>{
                            return {
                            x: `${singleSpan.start.substring(0, 4)}-${singleSpan.start.substring(5,7)}`,
                            y: singleSpan.total,
                            year:singleSpan.start.substring(0, 4),
                            }
                    });

                    languageDataSet.sort((a, b)=>{
                                    return a.year - b.year
                                });
                  
                    
                    transferResult.push({
                        id: targetData.language.name,
                        data:languageDataSet,
                        color: colorsArray[index]
                    });

                }
                
               return null;
         
        })

        setGraphData(transferResult);
    },[selectLanguages,languageTimeSpan]);

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
    <div className="line-graph-lang-container">
        <ResponsiveLine
        data={graphData}
        margin={{ top: 20, right: 90, bottom: 50, left: 25 }}
        xScale={{type: 'point'}}
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
 
export default LineGraph;