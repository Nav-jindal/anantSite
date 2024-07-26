// Packages:
import { useState } from "react"

// Import:
import { NavLink } from "react-router-dom"

// Typescript:
interface NavItemType {
    id?: number
    title: string
    location: string
    currentPage?: string
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}
// Functions: 
const NavItem = ({title, location, currentPage, setCurrentPage}:NavItemType) => <>
    <NavLink    
        className={`${currentPage === location ? 'font-semibold text-white cursor-default pointer-events-none' : ''} hover:text-white text-[#615F5F] cursor-pointer text-[16px] hover:font-semibold hover:shadow-[0_2px_0_0_#ffffff] pb-[5px]`}
        to={location}
        onClick={() => setCurrentPage(location ?? '/')}
    >
        {title}
    </NavLink>
</>

const Navbar = () => {
    // Constants:
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

    // States:
    const [currentPage, setCurrentPage] = useState<string>('/')

    return <div className='flex justify-between items-center py-[24px]'>
        <div className='font-bold text-[18px]'>AJ</div>
        <div className='flex gap-[30px]'>
            {navbarLinkArr?.map((navItem)=>
                <NavItem
                    key={navItem.id}
                    title={navItem?.title}
                    location={navItem?.location}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    </div>
} 
export default Navbar