import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        people: [
            { name: 'tauheed', age: 21 ,editCheck:false},
            { name: 'ali', age: 23 ,editCheck:false},
        ]

    },
    reducers: {
        

        deletePerson: (state, action) => {
            state.people.filter((person) => person.id !== action.payload.id)
        },
        edit: (state, action) => {

            let array = [...state.people]
            array[action.payload.index].name = action.payload.newName
            array[action.payload.index].age = action.payload.newAge
            array[action.payload.index].editCheck =false;


            state.people=array
        },

        editCheckReducer: (state, action) => {
            let array = [...state.people]
            array[action.payload].editCheck =true;
            

            state.people=array
          
        },




        increment: state => {
            state.count++
        },
        decrement: state => {
            state.count--
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount,edit,deletePerson,editCheckReducer  } = counterSlice.actions

export default counterSlice.reducer