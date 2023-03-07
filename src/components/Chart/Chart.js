import React from 'react';

import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaxNum = Math.max(...dataPointValues)

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxNum} label={dataPoint.label} />)}
    </div>
};

export default Chart