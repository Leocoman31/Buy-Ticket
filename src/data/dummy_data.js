import { BiSupport } from "react-icons/bi";
import { SiFsecure } from "react-icons/si";
import { RiRefund2Line } from "react-icons/ri";


export const methodPayment =[
    {
    id:1,
    method:"Mastercard",
    image:"https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/ihpf1qrotfoc9hje7bfi.png"
},

{id:2,
method:"Pay Pall",
image:"https://res.cloudinary.com/dib1opete/image/upload/v1741782164/busTicket/n3hpp8romtw1dqbx96gl.png"
},

{id:3,
    method:"Visa",
    image:"https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/b3k56cl6l4bsikqgwufq.png"
    }
]


export const services = [
    {
    id:1,
    title:"Secure Payment",
    //icon: <SiFsecure  className='h-5 w-5'/>,
    desc:"Integrate secure payment gateways fr users to pay for their tickets "
},
{
    id:2,
    title:"Refund policy",
   // icon: <RiRefund2Line  className='h-5 w-5'/>,
    desc:"Offer options for the users to purchase refundable tickets with clear terms"
},
{
    id:3,
    title:"24/7 Support",
    //icon:<BiSupport/>,
    desc:"Get Assistance anytime through chat, email pr phone"
},

]


export const topRoutes =[
    {
    busName:"Tcul 001",
    id:1,
    timeDuration:"4Hrs",
    price:"200 Kz",
    from:"Viana",
    to:"Escongolenses"

},
{
    busName:"Tcul 002",
    id:2,
    timeDuration:"3Hrs",
    price:"150 Kz",
    from:"Benfica",
    to:"Mutamba"

},
{
    busName:"Tcul 003",
    id:3,
    timeDuration:"2Hrs",
    price:"200 Kz",
    from:"Benfica",
    to:"Zango"

},
{
    busName:"Tcul 001",
    id:4,
    timeDuration:"3Hrs",
    price:"200 Kz",
    from:"Benfica",
    to:"Kilamba"

},
{
    busName:"Tcul 005",
    id:5,
    timeDuration:"3Hrs",
    price:"250 Kz",
    from:"Mutamba",
    to:"Viana"

},
{
    busName:"Tcul 003",
    id:6,
    timeDuration:"4Hrs",
    price:"300 Kz",
    from:"Viana",
    to:"Sambizanga"

},

]

export const routesBuss =[
    {
    id:1,
    busName:"Tcul 001",
    timeDuration:"4Hrs",
    hourFrom:"06:30 AM",
    hourTo:"10:30 AM",
    price:150,
    from:"Viana",
    to:"Escongolenses",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]


},
{
    busName:"Tcul 002",
    id:2,
    timeDuration:"3Hrs",
    hourFrom:"12:30 PM",
    hourTo:"03:30 PM",
    price:150,
    from:"Benfica",
    to:"Mutamba",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},
{
    busName:"Tcul 003",
    id:3,
    timeDuration:"2Hrs",
    hourFrom:"06:30 AM",
    hourTo:"08:30 AM",
    price:200,
    from:"Benfica",
    to:"Zango",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]
    

},
{
     busName:"Tcul 004",
    id:4,
    timeDuration:"3Hrs",
    hourFrom:"06:30 AM",
    hourTo:"09:30 AM",
    price:200,
    from:"Benfica",
    to:"Kilamba",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},
{
    busName:"Tcul 005",
    id:5,
    timeDuration:"3Hrs",
    hourFrom:"06:30 AM",
    hourTo:"10:30 AM",
    price:250,
    from:"Mutamba",
    to:"Viana",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},
{
    busName:"Tcul 006",
    id:6,
    timeDuration:"4Hrs",
    hourFrom:"07:30 AM",
    hourTo:"11:30 AM",
    price:300,
    from:"Viana",
    to:"Sambizanga",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},
{
    busName:"Tcul 007",
    id:7,
    timeDuration:"4Hrs",
    hourFrom:"09:30 AM",
    hourTo:"01:30 PM",
    price:400,
    from:"Porto",
    to:"Ilha",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]
},

{
    busName:"Tcul 007",
    id:8,
    timeDuration:"4Hrs",
    hourFrom:"12:30 PM",
    hourTo:"04:30 PM",
    price:300,
    from:"Ilha",
    to:"Mutamba",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]
},

{
    busName:"Tcul 009",
    id:9,
    timeDuration:"4Hrs",
    hourFrom:"01:30 PM",
    hourTo:"05:30 PM",
    price:300,
    from:"Golf 2",
    to:"Multiperfil",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available'},
        { id: 'B9', status: 'available'},
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available' },
        { id: 'B4', status: 'available' },
        { id: 'B6', status: 'available' },
        { id: 'B8', status: 'available' },
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available' },
        { id: 'A9', status: 'available' },
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},

{
    busName:"Tcul 010",
    id:10,
    timeDuration:"4Hrs",
    hourFrom:"07:30 AM",
    hourTo:"11:30 AM",
    price:300,
    from:"Multiperfil",
    to:"Gamek",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},

{
    busName:"Tcul 011",
    id:11,
    timeDuration:"4Hrs",
    hourFrom:"08:30 PM",
    hourTo:"10:30 PM",
    price:300,
    from:"Gamek",
    to:"Sanatorio",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},

{
    busName:"Tcul 012",
    id:12,
    timeDuration:"4Hrs",
    hourFrom:"10:30 AM",
    hourTo:"02:30 PM",
    price:300,
    from:"Viana",
    to:"Cacuaco",
    busSeatData:[
        { id: 'B1', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B5', status: 'available' },
        { id: 'B7', status: 'available' },
        { id: 'B9', status: 'available' },
        { id: 'B11', status: 'available'},
        { id: 'B13', status: 'available'},
        { id: 'B15', status: 'available'},
        { id: 'B17', status: 'available'},
    
        { id: 'B2', status: 'available'},
        { id: 'B4', status: 'available'},
        { id: 'B6', status: 'available'},
        { id: 'B8', status: 'available'},
        { id: 'B10', status: 'available'},
        { id: 'B12', status: 'available'},
        { id: 'B14', status: 'available'},
        { id: 'B16', status: 'available'},
        { id: 'B18', status: 'available'},
    
       
    
        { id: 'A1', status: 'available'},
        { id: 'A3', status: 'available'},
        { id: 'A5', status: 'available'},
        { id: 'A7', status: 'available'},
        { id: 'A9', status: 'available'},
        { id: 'A11', status: 'available'},
        { id: 'A13', status: 'available'},
        { id: 'A15', status: 'available'},
        { id: 'A17', status: 'available'},
    
        { id: 'A2', status: 'available'},
        { id: 'A4', status: 'available'},
        { id: 'A6', status: 'available' },
        { id: 'A8', status: 'available' },
        { id: 'A10', status: 'available'},
        { id: 'A12', status: 'available' },
        { id: 'A14', status: 'available' },
        { id: 'A16', status: 'available'},
        { id: 'A18', status: 'available'},
    ]

},



];


export const faq = [
    {
      title: "How to buy a ticket?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse??",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse??",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse??",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ]
