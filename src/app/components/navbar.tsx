// Import:
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <div className='flex justify-between items-center px-[50px] py-[18px] leading-[2px]'>
        <div className='font-bold text-[18px]'>Anant Jakhmola</div>
        <div className='flex gap-[30px]'>
            <NavLink    
                className='font-semibold hover:text-white text-[#615F5F] cursor-pointer text-[16px]' 
                to='/'
            >
                home
            </NavLink>
            <NavLink    
                className='font-semibold hover:text-white text-[#615F5F] cursor-pointer text-[16px]' 
                to='/about'
            >
                about
            </NavLink>
            <NavLink    
                className='font-semibold hover:text-white text-[#615F5F] cursor-pointer text-[16px]' 
                to='/articles'
            >
                articles
            </NavLink>
            <NavLink    
                className='font-semibold hover:text-white text-[#615F5F] cursor-pointer text-[16px]' 
                to='/contact'
            >
                contact
            </NavLink>
        </div>
        <button className='bg-primary-red px-[24px] py-[16px] rounded-[12px] cursor-pointer'>download resume</button>
    </div>
} 
export default Navbar