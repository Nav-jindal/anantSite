// Components
import TimelineComponent from "../components/timeline"
import AboutSidebarComponent from "../components/aboutSidebar"

//Icons
import { RiGraduationCapFill, RiSettings4Fill } from "react-icons/ri"

// Typescript:
export interface ExperienceType {
    id?: number
    workDuration: string
    companyName: string
    designation: string
    description: string
}

export interface ExtraInfoType {
    id?: number
    icon: React.ReactElement
    name: string
    info: string[]
}
const About = () => {
    // Constants:
    const experienceArr = [
        {
            id: 0,
            workDuration: 'july 21 - present',
            companyName: 'GROWW',
            designation: 'Devops',
            description: 'asdsadjdoijaoidjiojiod jjd iojsai oji ojaioj ioji oio jio jio jio jois'
        },
    ]

    const extraInfoArr = [
        {
            id: 0,
            icon: <RiGraduationCapFill size={30}/>,
            name: 'Graphic Era Deemed to be University',
            info: ['B.Tech', '2017-21'],
        },
        {
            id: 1,
            icon: <RiSettings4Fill size={30} />,
            name: 'Technical Skills',
            info: ['Docker', 'Kubernetes'],
        },
    ]
    return <div className='mt-[50px] flex gap-[50px]'>
        <div className='basis-[60%]'>
            <h2 className='text-[48.828px] font-semibold uppercase'>About</h2>
            <p className='text-[16px] text-[#888888]'> Lorem ipsum dolor sit amet consectetur. Nulla viverra faucibus mauris sagittis. Laoreet dictum ipsum leo 
                integer id nisi dignissim aliquam hac. Ante leo non scelerisque faucibus eros cursus sed ornare. Volutpat 
                amet nam scelerisque et nec donec. Amet sapien sed gravida arcu. Ut ac eget suspendisse cursus nec massa nec 
                non. Nulla non vitae et nisi pellentesque. Porttitor risus in sed habitasse. Nisl cursus in turpis gravida 
                senectus lectus. Id orci bibendum sit malesuada pharetra a diam id. Vel nulla gravida et eget.</p>
        
            <div className='mt-[35px]'> 
                <h3 className='text-[39.063px]'>Experience</h3>
                <div className='mt-[10px] grid grid-cols-[max-content_max-content_400px] gap-x-[25px]'>   
                    {experienceArr?.map((experience: ExperienceType)=> 
                    <TimelineComponent 
                        key={experience?.id}
                        workDuration={experience?.workDuration}
                        companyName={experience?.companyName}
                        designation={experience?.designation}
                        description={experience?.description}
                    />
                    )}
                </div>
            </div>
        </div>
        <div className='basis-[40%]'>
            {extraInfoArr?.map((extraInfo: ExtraInfoType)=>
                <AboutSidebarComponent 
                    key={extraInfo?.id}
                    name={extraInfo?.name}
                    icon={extraInfo?.icon}
                    info={extraInfo?.info}
                />
            )}
            
        </div>
    </div>
}

export default About