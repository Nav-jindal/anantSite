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
    <div className='block w-full h-[3px] bg-[#292929] '
        style={{
            boxShadow: '0px 0px 0px 100vmax #292929',
            clipPath: 'inset(0 -100vmax)'
        }}
    >
    </div>

const EventCard = ({
    companyName, 
    designation, 
    workDuration, 
    currentlyWorking
}: EventCardType) => 
    <div className="w-max">
    <div className={`${ currentlyWorking ? 'border-[#E73D3D]' : 'border-[#1D1C1C]' }
                relative top-[-10px] left-[24px] block border-[4px] 
                bg-[#0D0D0D] border-solid rounded-[50%] h-[20px] w-[20px]`}>

    </div>
    <div>
        <div className='relative triangle bg-[#1D1C1C] text-center py-[10px] px-[40px] mt-[25px]'>
            {workDuration}
        </div>
        <div className={`${currentlyWorking ? 'bg-[#E73D3D]' : 'bg-[#1D1C1C]'} py-[15px] text-center mt-[8px]`}>
            <div className='text-[25px] font-bold'>{companyName}</div>
            <div className='text-[20px]'>{designation}</div>
        </div>
    </div>
    </div>


const TimelineComponent = ({experienceArr}:TimelineComponentType) => {
    return <div className='mt-[30px]'>
                <Pillar />
                <div className='flex gap-[45px]'>
                    {experienceArr?.map((experience: ExperienceType)=>
                        <EventCard 
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