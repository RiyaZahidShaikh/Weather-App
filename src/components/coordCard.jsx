// import React from 'react';

const coordCard = (props) => {
    return (
        <div className='border border-amber-500 flex flex-col justify-center items-center text-black font-black'>
            <p className="text-xl">{props.lat}</p>
            <p className="text-sm">Latitude</p>
        </div>
    )
}

export default coordCard