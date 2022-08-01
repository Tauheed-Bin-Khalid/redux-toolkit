import React from 'react'
import {useDispatch}from 'react-redux';
import { decrement, increment } from './Store/counterSlice';

function Comp2({name,setCount}) {

  const dispatch=useDispatch();

  return (
    <div>Comp2
      {name}
      <button onClick={()=>{
        dispatch(increment())
      }}>+</button>

<button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
    </div>

  )
}

export default Comp2