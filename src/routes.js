import React from 'react'
import './routes.css';

const Routes = (props) => {
    // return (
    //     (<ul>
    //         {props.paths.map((items) => (
    //             <Path eachPath={items} />
    //         ))}
    //     </ul>)
    // )


    // let places = props.dataPoint.path;

    // console.log(places);
    return (
        <div className='pathAnswer'>
            <div className='source'>
                <div className='labelText'>Source: </div>
                <div className='sourceData'>{props.dataPoint.from}</div>
            </div>
            <div className='destination'>
                <div className='labelText'>Destination: </div>
                <div className='destinationData'>{props.dataPoint.to}</div>
            </div>
            <ul className='pathDetails'>
                <div className='labelText'>Path:</div>

                {props.dataPoint.path.map((items) => (
                    <div className='spots'>{items}</div>
                ))}
            </ul>
            <div className='totalDistance'>
                <div className='labelText'>Distance:</div>
                <div className='distanceData'>{props.dataPoint.totalDis} m</div>
            </div>
        </div>
    )
}

export default Routes
