import Footer from "../components/footer"
import { NavLink } from "react-router-dom"

const Home = () => {
    return <>
        <div className='h-full mt-[50px] md:mt-[100px] lg:mt-[0px] lg:flex lg:items-center min-h-[calc(100vh-161px)]'>
        <div className='leading-[60px]'>
            <h3 className='text-[#505050] text-[18px] sm:text-[20px] whitespace-nowrap uppercase tracking-wider font-bold'>Devops / SRE / Infra</h3>
            <h1 className='text-[39.063px] sm:text-[48.828px] font-semibold uppercase tracking-wider'>Anant Jakhmola</h1>
            <a
                href = 'http://localhost:3000/images/resume.pdf' 
                className='text-primary-red text-[20px] mt-[25px] cursor-pointer group flex gap-[25px] items-center w-max decoration-0'
                download = {true}
            >
                <span className='group-hover:font-medium'> Download Resume </span>
                <svg width="44" height="17" viewBox="0 0 44 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-8 transition-all'>
                    <path d="M1 8.5H42M42 8.5L35 1.5M42 8.5L35 15.5" stroke="#E73D3D" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </a>

            <NavLink  
                to='/about'
                className='text-[#615F5F] text-[20px] cursor-pointer group flex gap-[25px] items-center w-max'>
                    <span className='group-hover:font-medium group-hover:text-[#ffffff]'> About me </span>
                    <svg width="44" height="17" viewBox="0 0 44 17" xmlns="http://www.w3.org/2000/svg" className='text-[#615F5F] group-hover:text-[#ffffff] group-hover:translate-x-8 transition-all'>
                        <path d="M1 8.5H42M42 8.5L35 1.5M42 8.5L35 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
            </NavLink>
        </div>
        <div className='opacity-[.35] z-[-20] h-[40%] sm:h-[45%] lg:h-[65%] absolute right-0 bottom-0 sm:z-[0] sm:opacity-100'>
            <img className='object-cover h-full' src='./images/background.svg' alt='devops engineer'/>
        </div>
    </div>
    <Footer isFooterVisible = {false} />
    </>
}

export default Home