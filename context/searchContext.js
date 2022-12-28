import React, { Component } from 'react'


const SEARCH_CONTEXT=React.createContext();

export const Provider=({children})=>{
    return <SEARCH_CONTEXT.Provider>{children}</SEARCH_CONTEXT.Provider>
}

export default SEARCH_CONTEXT;