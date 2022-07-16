import React from "react"; 
import './Chart.css'; 
import ChartBar from './ChartBar' ; 
const Chart =(props)=>{  
    const dataPointsValues = props.dataPoints.map((datapoint)=>datapoint.value)
    // on a utilisé le ... dans max pour le rendre des arguments
    // car max n'accepte pas un tableau
    const totalMaximum = Math.max(...dataPointsValues)
     return( 
         <div className="chart">
             {props.dataPoints.map((dataPoint)=>
              (<ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum}
                label={dataPoint.label} />))}
         </div>
     );
} 
export default Chart