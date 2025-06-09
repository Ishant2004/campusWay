import React from 'react'
import './routes.css';

const Routes = (props) => {
    // Add validation to prevent crashes if data is not in expected format
    if (!props.dataPoint || typeof props.dataPoint !== 'object') {
        return <div className='pathAnswer'>No valid data available</div>;
    }

    const { from, to, path, totalDis } = props.dataPoint;

    // Check if required properties exist
    if (from === undefined || to === undefined || !Array.isArray(path) || totalDis === undefined) {
        return (
            <div className='pathAnswer'>
                <div className='error'>Error: Invalid data format received</div>
            </div>
        );
    }

    return (
        <div className='pathAnswer'>
            <div className='source'>
                <div className='labelText'>Source: </div>
                <div className='sourceData'>{from}</div>
            </div>
            <div className='destination'>
                <div className='labelText'>Destination: </div>
                <div className='destinationData'>{to}</div>
            </div>
            <ul className='pathDetails'>
                <div className='labelText'>Path:</div>
                {path.map((item, index) => (
                    <div className='spots' key={index}>{item}</div>
                ))}
            </ul>
            <div className='totalDistance'>
                <div className='labelText'>Distance:</div>
                <div className='distanceData'>{totalDis} m</div>
            </div>
        </div>
    )
}

export default Routes
