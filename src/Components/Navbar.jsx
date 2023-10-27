import {Outlet,Link} from 'react-router-dom' // recordar poner el outlet aqui en esta vista 

const Navbar = () => {
  return (
    <>
    <nav className='bg-red-600 py-6 relative'>
      <div className='container mx-10 flex'>
        <img className='w-30 h-14 mt-1' src="./src/img/imagen-1.png" alt="imagen de prueba" />
        <div className='mx-5 mt-5'>
          <Link to="/" className='border px-5 py-4 rounded-lg mx-2 font-bold text-white text-lg hover:text-red-300'>inicio</Link>
          <Link to="/contacto" className='border px-5 py-4 rounded-lg mx-2 font-bold text-white text-lg hover:text-red-300'>contacto</Link>
        </div>
      </div>
    </nav>
    <div>
      <Outlet/>
    </div>
    </>
    
  )
}

export default Navbar
