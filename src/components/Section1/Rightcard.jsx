import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full  shrink-0 overflow-hidden relative w-65  rounded-4xl'>
    <img  className ='w-full h-full object-cover' src={props.img} alt=""></img>
 <Rightcardcontent  color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
