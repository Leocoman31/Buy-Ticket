import { createSlice } from "@reduxjs/toolkit";
import {routesBuss} from '../data/dummy_data'



const busData = routesBuss;

const initialState={
    busTicket: localStorage.getItem("bus")? JSON.parse(localStorage.getItem("bus")):[]
          
}

const busSlice = createSlice({
    name:"busTicket",
    initialState,
    reducers:{
        buyTicket(state,action){
            const newticket = action.payload;

            state.busTicket.push(newticket);
            localStorage.setItem("bus",JSON.stringify(state.busTicket))


        }
    }
});



/*export const getBusID=(id) => (state) => {
    
    if(state.busTicket.busTicket.find((bus) => bus.id === id)){
        return state.busTicket.busTicket.busSeatData

    }
    else{
        return 0
    }
}*/
       

export const {buyTicket} = busSlice.actions;
export default  busSlice.reducer;

export const getBus = (state) => state.busTicket.busTicket;


