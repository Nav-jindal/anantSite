// Imports:
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiInstagramFill, RiMediumFill  } from "react-icons/ri"

const Footer = () => {
    return <div className='flex items-end gap-[20px] py-[24px]'>
        <IconContext.Provider value={{ color: '#4D4D4D',className: 'footerIcons', size: '36px', style: {cursor: 'pointer', backgroundColor:'none'}}}> 
        {/* hover color is in index.css */}
            <RiLinkedinBoxFill />
            <RiInstagramFill />
            <RiMediumFill />
        </IconContext.Provider>
    </div>
}

export default Footer