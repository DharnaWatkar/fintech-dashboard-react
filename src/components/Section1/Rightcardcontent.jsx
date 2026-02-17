import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div>
         <div className="absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-between">
      <h2 className='bg-white font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
      <div>
        <p className=' text-shadow-2xs leading-normal text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, harum!</p>
        <div className='flex justify-between '>
          <button  style ={{backgroundColor: props.color}} className=' text-white font-medium px-7 py-1 rounded-full'> {props.tag} </button>
          <button style ={{backgroundColor: props.color}} className=' text-white  font-medium px-4 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Rightcardcontent
