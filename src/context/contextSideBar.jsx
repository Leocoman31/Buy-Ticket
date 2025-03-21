import React, { useContext } from 'react'
import { createContext,useState } from 'react'

  const ContextModal = createContext();


    function ModalProvider ({children})
    {
    
      const [openSideBar, setOpenSideBar] = useState(false);
      

      function handleSideBar (){
        setOpenSideBar(() => !openSideBar)
      }



    
  return (
    <ContextModal.Provider value={{
     
     
      handleSideBar,
      openSideBar,
     






    

    }}>
      {children}

    </ContextModal.Provider>
  )
}

function useContextSideBar(){
  const context = useContext(ContextModal);
  if(context === undefined) throw new Error("O contexto nao deve ser usado aqui");

  return context;
}

export {useContextSideBar,ModalProvider}
