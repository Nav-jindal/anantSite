// Packages:
import Navbar from './app/components/navbar'
import Home from './app/pages/home'
import About from './app/pages/about'
import Articles from './app/pages/articles'
import Contact from './app/pages/contact'

// Routes:
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

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
  
  return (
      <div className='px-[20px] md:px-[50px] w-full text-white'>
        <div className='fixed opacity-[.55] right-0 bottom-0 left-0 top-0 z-[-2]'>
            <img className='object-cover h-full w-full' src='./images/backgroundPattern.png' alt='devops engineer'/>
        </div>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
