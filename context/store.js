import React, { Component, useReducer } from 'react'
import { ACTIONS } from './action';
import {reducer} from './reducer'

export const INITIAL_STATE={
    campgrounds:[],
    dates:{
        checkIn:"",
        checkOut:"",
    },
    campingEquip:[],
    currentStep:1
}
const SEARCH_CONTEXT=React.createContext();

export const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,INITIAL_STATE);


    const value={
        initialState:state,
        addCampgrounds:(campground)=>{
            console.log(campground)
            dispatch(  {type:ACTIONS.ADD_CAMPGROUND,payload:campground})
        },
        updateDates:(selectedDate)=>{
            dispatch({type:ACTIONS.SELECT_DATE,payload:selectedDate})
        },
        removeCampground:(id)=>{
            dispatch({type:ACTIONS.REMOVE_CAMPGROUND,payload:id})
        },
        updateStep:(indx)=>{
            dispatch({type:ACTIONS.UPDATE_STEP,payload:indx})
        },
        updateCampground:(option,id)=>{
            dispatch({type:ACTIONS.UPDATE_OPTIONS,payload:{option,id}})
        }
    }

    return <SEARCH_CONTEXT.Provider value={value}>{children}</SEARCH_CONTEXT.Provider>
}

export default SEARCH_CONTEXT;