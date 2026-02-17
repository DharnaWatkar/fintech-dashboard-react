import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 px-16 flex gap-10  items-center h-[85vh]'>
      <Leftside/>
      <Rightside users={props.users}/>
    </div>
  )
}

export default Page1content
