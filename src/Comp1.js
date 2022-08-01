import React, { useState } from 'react'
import Comp2 from './Comp2'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { edit, editCheckReducer } from './Store/counterSlice';



function Comp1() {
    const count = useSelector((state) => state.count)

    const dispatch = useDispatch();

    
    const [i, setI] = useState(0);


    let n;
    let a;

    return (
        <div >comp1 {count.count}

            {/* <Comp2 /> */}
            {count.people.map((person, index) => {
                const { name, age, editCheck } = person
                return <div key={index}>

                    {editCheck ?

                        <>
                            <input style={{ padding: "20px", borderRadius: "10px" }} placeholder="What you need to add" type="text" id="lname" name="lname"

                                onChange={(e) => {
                                    console.log(e.target.value)
                                    n = e.target.value

                                }} />
                            <input style={{ padding: "20px", borderRadius: "10px" }} placeholder="What you need to add" type="text" id="lname" name="lname"

                                onChange={(e) => {
                                    console.log(e.target.value)
                                    a = e.target.value

                                }} />

                        </>
                        :
                        <>
                            name  : {name}<br></br>
                            age  : {age}
                            <button onClick={() => {
                                dispatch(editCheckReducer(index))

                                setI(index)

                            }}>Edit</button>
                        </>


                    }
                </div>

            })}

            <button onClick={() => {
                console.log(n, a, i)
                dispatch(edit({ newName: n, newAge: a, index: i }))
                
            }}>save</button>


        </div>
    )
}

export default Comp1