import {Routes, Route} from 'react-router-dom'
import AppLayoult from './components/AppLayoult'
import Home from './pages/home'

import Ticket from './pages/ticket'
import About from './pages/about'
import TicketDetail from './pages/ticketDetail'
import Checkout from './pages/checkout'
import OurServices from './pages/services'

import Invoice from './pages/reservedTicket'
function App() {
  

  return (
    <>
    <Routes>

    <Route element={<AppLayoult/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='services' element={<OurServices/>}/>
        <Route path='ticket' element={<Ticket/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/ticket/:name' element={<TicketDetail/>}/>
    <Route path='/ticket/checkout' element={<Checkout/>}/>
    <Route path='invoice' element={<Invoice/>}/>
    </Route>

    

    
    </Routes>

 
      
       
    </>
  )
}

export default App
