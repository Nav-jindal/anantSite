// Packages:
import { useState, useEffect } from "react"

// Import:
import { NavLink, useLocation } from "react-router-dom"
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"
import { AnimatePresence, motion, Variants } from "framer-motion"

// Typescript:
interface NavItemType {
    id?: number
    title: string
    location: string
    currentURL?: string
    setIsCollapsibleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
// Functions: 
const NavItem = ({
    title, 
    location,
    currentURL, 
    setIsCollapsibleMenuOpen
    }:NavItemType) => <>
    <NavLink    
        className={`${currentURL === location ? 'font-semibold text-white cursor-default pointer-events-none' : ''} hover:text-white text-[#615F5F] cursor-pointer text-[20px] md:text-[16px] hover:font-semibold hover:shadow-[0_2px_0_0_#ffffff] pb-[5px] w-max`}
        to={location}
        onClick={() => setIsCollapsibleMenuOpen(false)}
    >
        {title}
    </NavLink>
</>

const Navbar = () => {
    // Constants:
    const currentURL  = useLocation()
    const navbarLinkArr = [
        {
            id: 0,
            title: 'home',
            location: '/'
        },
        {
            id: 1,
            title: 'about',
            location: '/about'
        },
        {
            id: 2,
            title: 'articles',
            location: '/articles'
        },
        {
            id: 3,
            title: 'contact',
            location: '/contact'
        }
    ]
    const collapseNavbarVar: Variants = {
        open: {
            x: 0,
            
        },
        close: {
            x: 1200,
        },
    }
    // States:
    const [isCollapsibleMenuOpen, setIsCollapsibleMenuOpen] = useState<boolean>(false)

    // Effects:
    useEffect(()=>{
        console.log('currentURL: ', currentURL.pathname === '/home')
    },[currentURL])

    return <div className='flex justify-between items-center py-[24px]'>
        <div className='font-bold text-[18px]'>AJ</div>
        <div className='navLinkWrapper'> 
            <div className='cursor-pointer md:hidden' onClick={()=>setIsCollapsibleMenuOpen(true)}><RiMenu3Fill size={30}/></div>
                <div className='hidden md:flex gap-[30px] flex-col md:flex-row'>
                    {navbarLinkArr?.map((navItem)=>
                        <NavItem
                            key={navItem.id}
                            title={navItem?.title}
                            location={navItem.location}
                            currentURL={currentURL.pathname}
                            setIsCollapsibleMenuOpen={setIsCollapsibleMenuOpen}
                        />
                    )}
                </div>
                <AnimatePresence>
                <div className={`${isCollapsibleMenuOpen ? 'block' : 'hidden'} bg-[rgba(13,_13,_13,_0.55)] z-[50] absolute left-0 top-0 bottom-0 right-0`}>
                </div>
                <motion.div 
                    variants={collapseNavbarVar}
                    animate={`${isCollapsibleMenuOpen ? 'open' : 'close'}`}
                    transition={{ease:'easeInOut', type: 'tween', duration: .825}}
                    className={`z-[100] md:hidden h-full origin-left absolute right-0 top-0 bottom-0 w-full sm:w-[50%]`}>
                    
                    <motion.div 
                        className={`origin-right h-full flex flex-col items-end gap-[40px] bg-[#1D1C1C] py-[24px] px-[50px]`}>
                        
                        <div className='cursor-pointer md:hidden' onClick={()=>setIsCollapsibleMenuOpen(false)}>
                            <RiCloseFill size={30}/>
                        </div>
                        
                        {navbarLinkArr?.map((navItem)=>
                            <NavItem
                                key={navItem.id}
                                title={navItem?.title}
                                location={navItem?.location}
                                currentURL={currentURL.pathname}
                                setIsCollapsibleMenuOpen={setIsCollapsibleMenuOpen}
                            />
                        )}
                    </motion.div>
                            
                </motion.div>

                </AnimatePresence>
                
        </div>
    </div>
} 
export default Navbar