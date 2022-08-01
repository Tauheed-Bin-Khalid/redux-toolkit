import React from 'react'
import {useSelector}from 'react-redux';

function Comp4() {
  const count= useSelector((state)=> state.count)
  return (
    <div>comp4 {count.count}

    </div>
  )
}

export default Comp4