// Typescript
import { ExperienceType } from "../pages/about"

interface EventCardType {
    companyName: string
    designation: string
    description: string
}

// Functions:
const Pillar = () => 
        <div className='col-[2_/_3] block h-full w-[3px] bg-[#292929] relative mt-[16px]'>
            <div className='absolute top-[-5px] left-[-3.8px] w-[12px] h-[12px] rounded-[50%] bg-white'></div>
        </div>

const EventCard = ({companyName, designation, description}: EventCardType) => 
    <div className='triangle relative col-[3_/_4] bg-[#1C1C1C] p-[25px] mt-[16px] mb-[40px] ml-[25px]'>
        <div className='text-[31.25px] font-bold'>{companyName}</div>
        <div className='text-[25px] italic font-normal'>{designation}</div>
        <p className='mt-[20px] text-[16px] text-[#828181]'>{description}</p>
    </div>


const TimelineComponent = ({workDuration, companyName, designation, description}:ExperienceType) => {
    return <>
                <p className='text-[18px] font-bold w-max col-[1_/_2]'>{workDuration}</p>
                <Pillar />
                <EventCard 
                    companyName={companyName}
                    designation={designation}
                    description={description}
                />
            </>
}

export default TimelineComponent