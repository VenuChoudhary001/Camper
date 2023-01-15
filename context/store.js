import React, { Component, useEffect, useReducer } from 'react'
import { ACTIONS } from './action';
import {reducer} from './reducer'
import add from 'date-fns/add'
export const INITIAL_STATE={
    campgrounds:[],
    checkIn:new Date(),
    checkOut:add(new Date(),{days:5}),
    campingEquip:[],
    selectedDate:null,
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
        updateCampground:(option,camp_id,option_id)=>{
            dispatch({type:ACTIONS.UPDATE_OPTIONS,payload:{option,camp_id,option_id}})
        },
        updateCheckIn:(data)=>{
            dispatch({type:ACTIONS.SELECT_CHECK_IN,payload:data})
        },
        updateCheckOut:(data)=>{
            dispatch({type:ACTIONS.SELECT_CHECK_OUT,payload:data})
        },
        updateDate:(date)=>{
            dispatch({type:ACTIONS.SELECT_DATES,payload:date})
        },
        updateEquipment:(data)=>{
            dispatch({type:ACTIONS.SELECT_EQUIPMENT,payload:data})
        }
    }

    
    useEffect(()=>{
      if(value.initialState.campgrounds.length==0){
        value.updateStep(1);
      }
    },[value.initialState.campgrounds])



    return <SEARCH_CONTEXT.Provider value={value}>{children}</SEARCH_CONTEXT.Provider>
}

export default SEARCH_CONTEXT;