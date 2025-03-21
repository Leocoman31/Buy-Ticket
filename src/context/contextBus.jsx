import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import {routesBuss} from '../data/dummy_data';
import { useState } from "react";




  const contextBus = createContext();
 
  function BusProvider({children}){
 const[selectedSeat,setSeletectSeat] = useState([]);
 const[infOrder, setinfOrder] = useState([]);
 const[checkout,setCheckout]=useState({})





 
 const handleCheckoutInfo =(checkoutInfo)=>{
    setCheckout(checkoutInfo);
 }


 const handleInfOrder = (data)=>{
  
    setinfOrder(data)
 
        
    

 }



const handleSeatSelected = (seatSelected, seatId,setSeletectSeat)=>{
   
    if(seatSelected === "booked"){
        return

    }; 


    
    setSeletectSeat((prevSelectedSeats)=>{
        if(prevSelectedSeats.includes(seatId)){
            return prevSelectedSeats.filter((seat) =>seat !==seatId)
        }
        else{
            
            return [...prevSelectedSeats,seatId];
        }
    })


}
const verificationSeat = (seat,selectedSeat)=>{

    if(seat.status ==="booked"){
        return "text-red-500 cursor-not-allowed"
    }
    if(selectedSeat.includes(seat.id)){
        return 'text-yellow-500 cursor-pointer'

    }

    return "text-gray-500 cursor-pointer"
}


    

   function getBus(name){
    const busCurrent = routesBuss.find((bus) => bus.busName === name);
   return busCurrent
     

   }
    



    return (

        <contextBus.Provider value={{
            verificationSeat,
            handleSeatSelected,
            selectedSeat,
            setSeletectSeat,
            handleInfOrder,
            infOrder,
            getBus,
            checkout,
            handleCheckoutInfo

 

        }}>
            {children}

        </contextBus.Provider>
    )

}


function  useContextBus(){
    const context = useContext(contextBus);

    if(context===undefined) throw new Error("Context should not be used here")

    return context
}

export {useContextBus,BusProvider}