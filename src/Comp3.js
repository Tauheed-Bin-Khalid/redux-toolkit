import React from 'react'
import Comp4 from './Comp4'
import {useDispatch}from 'react-redux';
import { decrementByAmount, incrementByAmount } from './Store/counterSlice';


function Comp3() {
  const dispatch=useDispatch();

  return (
    <div>comp3
      <button onClick={()=>{
        dispatch(incrementByAmount(5))
      }}>+5</button>

<button onClick={()=>{
        dispatch(decrementByAmount(5))
      }}>-5</button>
      <Comp4 />
    </div>
  )
}

export default Comp3