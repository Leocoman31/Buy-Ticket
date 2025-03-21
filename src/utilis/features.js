import {routesBuss} from '../data/dummy_data';


const list = routesBuss;

export const handleSeatSelected = (seatSelected, seatId,setSeletectSeat)=>{
   
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
export const verificationSeat = (seat,selectedSeat)=>{

    if(seat.status ==="booked"){
        return "text-red-500 cursor-not-allowed"
    }
    if(selectedSeat.includes(seat.id)){
        return 'text-yellow-500 cursor-pointer'

    }

    return "text-gray-500 cursor-pointer"
}


export const getBus =(name) =>{
 
    
        const busCurrent = list.find((bus) => bus.busName === name)
        return  busCurrent
    

}
