
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BusProvider } from './context/contextBus.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux';
import { store } from './store/store.js'
import { ModalProvider } from './context/contextSideBar.jsx'

createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>

   <BusProvider>
    <ModalProvider>
    <App />
    </ModalProvider>
   

   </BusProvider>
   


  
   
     </BrowserRouter>
     <Toaster position="bottom-right" gutter={12} containerStyle={{margin:"8px"}}
     toastOptions={{
       sucess:{
         duration:3000,
       },
       error:{
         duration:5000,
       },
       style:{
         fontSize:"16px",
         maxWidth:"500px",
         padding:"16px 24px",
         background:"#008AD8",
         color:"#fff",
 
 
       },
     }}
     />
   </>
    
 
)
