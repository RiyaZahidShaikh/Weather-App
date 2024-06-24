// import React from 'react' 
import UpperContainer from './upperContainer'
import MiddleContainer from './middleContainer'
import LowerContainer from './lowerContainer'

const mainContainer = (props) => {
    return (
        <div className='border border-red-500  w-[400px] text-white'>
            <UpperContainer city={props.city} temp={Math.round(props.data.main.temp-273)}/>
            <MiddleContainer lat={props.data.coord.lat} lon={props.data.coord.lon} id={props.data.id}/>
            <LowerContainer/>
        </div>
    )
}

export default mainContainer