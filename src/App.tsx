// Packages:
import Navbar from './app/components/navbar'
import Home from './app/pages/home'
import About from './app/pages/about'
import Articles from './app/pages/articles'
import Contact from './app/pages/contact'
import Footer from './app/components/footer'

// Routes:
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-secondary-black w-full text-white">
      <Navbar/>
      <main className='px-[50px] min-h-[calc(100vh-109px)]'>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/articles' element={ <Articles /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
