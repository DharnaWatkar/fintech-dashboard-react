import React from 'react'
import Rightcard from './Rightcard'

const Rightside = (props) => {

  return (
    <div id="right" className='h-full flex flex-nowrap overflow-x-auto gap-5 w-2/3'>
    {props.users.map(function(elem,idx){
     return <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
    
      
    })}
                  
    </div>
  )
}

export default Rightside
