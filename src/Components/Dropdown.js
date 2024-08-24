import React from 'react'

const Dropdown = (props) => {
  return (
    <div>
      <h2 className='text-sm border-b-2 border-slate-300 ms-5 dropdown'>{props.tag}</h2>
    </div>
  )
}

export default Dropdown
