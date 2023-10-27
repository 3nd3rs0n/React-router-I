import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar' // en este vista va el navbar solo
import Inicio from './pages/Inicio' // en esta vista va el inicio o home en la ruta ./ 
import Contacto from './pages/Contacto' // en esta vista va el contacto en la ruta /inicio

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <Inicio/>

      },
      {
        path: '/contacto',
        element: <Contacto/>
    
      },
      {
        path: '*',
        element: <p className='text-center m-10 font-bold uppercase font-serif text-2xl'> ERROR 404 </p>
      }
      
    ]

  }

]
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
