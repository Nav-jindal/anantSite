// Imports:
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiInstagramFill, RiMediumFill  } from "react-icons/ri"

interface FooterProps {
    isFooterVisible?: boolean
}

const Footer = ({
    isFooterVisible = true,
}: FooterProps) => {
    return <div className={`${isFooterVisible ? 'flex' : 'hidden sm:flex' }  items-end gap-[20px] py-[24px]`}>
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
}

export default Footer