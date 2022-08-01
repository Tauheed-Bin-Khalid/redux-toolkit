// import {createStore} from 'redux'
// import { reducer } from './reducer'

import { configureStore } from "@reduxjs/toolkit";

// export const store=createStore(reducer)
import counterReducer from './counterSlice'

export const store=configureStore({
    reducer:{
        count:counterReducer,
        // user:null Define Multiple reducers here
    }
})