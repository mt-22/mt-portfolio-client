import React from 'react'
import handleViewport from 'react-in-viewport'

type TimeLineProps = {
    data:
    {
        title: string,
        text: string,
        date: string,
        category: {
            label: string,
            color: string
        }
    }}

const TimeLineItem = ({ data }:TimeLineProps) => {
    const ItemContent = (props:any) => {
        const { inViewport, enterCount, forwardedRef, data } = props
        return (
            <div ref={forwardedRef} className={'timeline-item-content' + (inViewport && enterCount <= 1 ? " timeline-item-content-try" : enterCount===0 ? " timeline-item-content-hidden" : "")}>
                {data.category.label.length < 17 && <span className='timeline-label' style={{background: data.category.color}}>{data.category.label}</span>}
                <time>{data.date}</time>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <span className='timeline-circle'/>
            </div>
        )
    }
    const ViewportItemContent = handleViewport(ItemContent);
  return (
    <div className='timeline-item'>
        <ViewportItemContent data={data} onEnterViewport={() => console.log('foo')}/>
    </div>
  )
}

export default TimeLineItem