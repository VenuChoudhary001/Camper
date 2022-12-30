import axios from "axios";


export const SEARCH_CAMPGROUNDS=async (str)=>{
    try {
        let res=await fetch(`/api/${str}`);
        let {data}=await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const GET_NEARBY_CAMPS=async(query)=>{
    try {
        let res=await fetch(`/api/nearby/${query.camp_id}?city=${query.city}`);
        let {data}=await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

