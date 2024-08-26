// Imports:
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiInstagramFill, RiMediumFill  } from "react-icons/ri"

interface FooterProps {
    isFooterVisible?: boolean
}

const Footer = ({
    isFooterVisible = true,
}: FooterProps) => {
    return <div className={`${isFooterVisible ? 'flex' : 'hidden sm:flex' }  items-end justify-between gap-[25px] pt-[24px] overflow-clip flex-wrap`}>
        <div className='flex gap-[20px] pb-[20px]'>
            <IconContext.Provider value={{ color: '#4D4D4D',className: 'footerIcons', size: '36px', style: {cursor: 'pointer', backgroundColor:'none'}}}> 
            {/* hover color is in index.css */}
                <a href='https://www.linkedin.com/in/anantjakhmola9/' target='_blank' rel="noreferrer">
                    <RiLinkedinBoxFill />
                </a>
                <a href='https://www.instagram.com/anantjakhmola9/' target='_blank' rel="noreferrer">
                    <RiInstagramFill />
                </a>
                <a href='https://anantjakhmola9.medium.com/' target='_blank' rel="noreferrer">
                    <RiMediumFill />
                </a>
            </IconContext.Provider>
        </div>
        <div className='text-[#4D4D4D] font-medium pb-[20px]'>
            © copyright 2024
        </div>
        <div className={`${isFooterVisible ? 'block' : 'hidden'} h-[160px] relative bottom-[-10px] hidden md:block`}>
            <img className='object-cover w-full h-full' src='./images/footerImage.png' alt='Engineer on table'/>
        </div>
    </div>
}

export default Footer