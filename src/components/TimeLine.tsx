import React from 'react'
import TimeLineItem from './TimeLineItem'
import './TimeLine.css'

// type timeLineData = {
//     timeLineData: [{
//         text: string,
//         date: string,
//         category: {
//             label: string,
//             color: string
//             }
//         }
//     ]
// }

const TimeLine = ({ timeLineData }:any) => {
    if (timeLineData.length > 0) {
        return (
            <div className='timeline-container'>
                <div className='timeline-container-left'>
                    {timeLineData.map((data:any, index:any) => (
                        index % 2 === 0 ? <TimeLineItem data={data} key={index}/>
                        
                        : <div key={index} className='blank-item'></div>
                    ))}
                </div>
                <div className='timeline-container-right'>
                    {timeLineData.map((data:any, index:any) => (
                        index % 2 !== 0 ? <TimeLineItem data={data} key={index}/>
                        : <div key={index} className='blank-item'></div>
                    ))}
                </div>
            </div>
        )
    }
    return (<></>)
}

export default TimeLine