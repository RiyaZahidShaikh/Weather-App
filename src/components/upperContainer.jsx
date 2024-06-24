// import React from 'react'

const upperContainer = (props) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className="text-[40px]">{props.city}</p>
            <p className="text-[100px] -mt-6 -mb-5 font-black">{props.temp}&deg;C</p>
            <p className="">{day}-{month}-{year}</p>
        </div>
    )
}

export default upperContainer