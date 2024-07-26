// Packages:
import Navbar from './app/components/navbar'
import Home from './app/pages/home'
import About from './app/pages/about'
import Articles from './app/pages/articles'
import Contact from './app/pages/contact'
import Footer from './app/components/footer'

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
      errorElement: 'Page Not Found',
      children: [
        {
          path: '/',
          element: <Home />
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
      <div className='px-[50px] w-full text-white'> {/* min-h-[calc(100vh-109px)] */}
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
