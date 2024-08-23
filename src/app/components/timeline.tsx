// Typescript
import { ExperienceType } from "../pages/about"

interface EventCardType {
    companyName: string
    designation: string
    workDuration: string
    currentlyWorking: boolean
}

interface TimelineComponentType {
    experienceArr: ExperienceType[]

}
// Functions:
const Pillar = () => 
    <div className='bg-[#292929] block min-h-full w-[3px] sm:w-full sm:h-[3px] fullBleedLineTimeline'
    >
    </div>

const EventCard = ({
    companyName, 
    designation, 
    workDuration, 
    currentlyWorking
}: EventCardType) => 
    <div className='w-max relative'>
        <div className={`${ currentlyWorking ? 'border-[#E73D3D]' : 'border-[#1D1C1C]' }
                    absolute top-[14px] left-[-56px] sm:top-[-10px] sm:left-[24px] block border-[4px] 
                    bg-[#0D0D0D] border-solid rounded-[50%] h-[20px] w-[20px]`}>

        </div>
        <div className='sm:mt-[42px]'>
            <div className='relative triangle bg-[#1D1C1C] text-center py-[10px] px-[40px]'>
                {workDuration}
            </div>
            <div className={`${currentlyWorking ? 'bg-[#E73D3D]' : 'bg-[#1D1C1C]'} py-[15px] text-center mt-[8px]`}>
                <div className='text-[25px] font-bold'>{companyName}</div>
                <div className='text-[20px]'>{designation}</div>
            </div>
        </div>
    </div>


const TimelineComponent = ({experienceArr}:TimelineComponentType) => {
    return <div className='mt-[30px] flex gap-[45px] sm:block pl-[9px] sm:pl-[0px]'>
                <Pillar />
                <div className='flex flex-col my-[25px] sm:my-[0px] gap-[50px] sm:flex-row '>
                    {experienceArr?.map((experience: ExperienceType, index: number)=>
                        <EventCard 
                            key={index}
                            companyName={experience?.companyName}
                            designation={experience?.designation}
                            workDuration={experience?.workDuration}
                            currentlyWorking={experience?.currentlyWorking}
                        />
                    )}
                </div>
                
                
            </div>
}

export default TimelineComponent