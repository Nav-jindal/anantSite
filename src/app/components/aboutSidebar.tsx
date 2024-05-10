// Typescript:
import { ExtraInfoType } from "../pages/about"


const AboutSidebarComponent = ({icon, name, info}:ExtraInfoType) => {
    return <div className='flex gap-[20px] bg-[#1D1C1C] px-[24px] py-[18px] my-[30px]'>
        {icon}
        <div>
            <h4 className='text-[20px] font-bold'>{name}</h4>
            <div className='flex flex-wrap gap-[10px]'>
            {info?.map((item:string, index:number)=><div>
                <p className='italic text-[16px] '>{item} {index < info.length - 1 ? '.' : ''}</p>
            </div>)}
            </div>
        </div>
    </div>
}

export default AboutSidebarComponent