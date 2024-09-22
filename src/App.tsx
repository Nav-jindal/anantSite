// Packages:
import { useEffect, useState } from 'react'
import Navbar from './app/components/navbar'
import Home from './app/pages/home'
import About from './app/pages/about'
import Articles from './app/pages/articles'
import Contact from './app/pages/contact'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Framer-Motion
import { motion, Variants } from 'framer-motion'

// Functions: 
const MainLayout = () => <>
  <Navbar />
  <Outlet />
</>

function App() {
  // Constants:
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <h3 className='my-[35px]'>Error: Page Not Found</h3>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/articles',
          element: <Articles />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ])

  // States:
  const [mousePosition, setMousePosition] = useState<{
    coordX: number
    coordY: number
  }>({ coordX: 0, coordY: 0 })
  
  // Framer Motion Variants:
  const cursorVariant: Variants = {
    default: {
        x: mousePosition.coordX - 12.5,
        y: mousePosition.coordY - 12.5,
        transition: {
          type: 'smooth',
          duration: 0
        },
        backgroundColor: '#f5f4f4',
        mixBlendMode: 'difference',
    },
  }

  // Functions:

  const handleMouseMove = (e:any) => { //React.MouseEvent<HTMLDivElement>
    setMousePosition({ 
      coordX: e.clientX, 
      coordY: e.clientY 
    });
  };

  // Effects:
  useEffect(()=>{

    window.addEventListener('mousemove', handleMouseMove)

    return() => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mousePosition])

  return (
      <div className='px-[20px] md:px-[50px] w-full text-white' 
        style={{cursor: 'none' }}
      >
        <motion.div
          className='h-[25px] w-[25px] rounded-[50%] fixed left-0 top-0 pointer-events-none z-[10000]'
          variants={cursorVariant}
          animate='default'
        >
          <sup className='relative left-[30px] top-[-16px] whitespace-nowrap'>{`[${mousePosition.coordX}, ${mousePosition.coordY}]`}</sup>
        </motion.div>
        <div className='fixed opacity-[.55] right-0 bottom-0 left-0 top-0 z-[-2] select-none'>
            <img className='object-cover h-full w-full' src='./images/backgroundPattern.png' alt='devops engineer' />
        </div>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
