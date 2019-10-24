import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { ResponsiveBar } from '@nivo/bar';

const BarGraph = () => {

    const dataUsa = useSelector(state => state.languages.languagesUsa);
    const dataCanada = useSelector(state=> state.languages.languagesCanada);
    //console.log(dataUsa);
    //console.log(dataCanada);
    return (
        <div className="bar-graph">
            <p>This is the bar graph</p>
        </div>
    )
}

export default BarGraph

