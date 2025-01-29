// Components
import Footer from "../components/footer"
import TimelineComponent from "../components/timeline"

// Typescript:
export interface ExperienceType {
    id: number
    workDuration: string
    companyName: string
    designation: string
    currentlyWorking: boolean
    //description: string
}

export interface ExtraInfoType {
    id?: number
    heading: string
    //icon: JSX.Element
    name?: string
    info: string[]
}

// Functions:
const AboutExtraInfoComponent = ({ 
    //icon, 
    heading, 
    name, 
    info 
}:ExtraInfoType) => 
    <div className='grid grid-cols-1 sm:grid-cols-[150px_400px] gap-[20px] md:gap-[45px] my-[40px]'>
        {/* <div className='flex gap-[15px] items-'>
            <div>{icon}</div>
        </div> */}
        <h3 className='text-[25px] font-medium h-max'>{heading}</h3>
        <div className=''>
            <h4 className='text-[18px] font-medium text-[#ABABAB]'>{name}</h4>
            <div className='flex flex-wrap gap-[25px] mt-[10px]'>
                {info?.map((item:string, index:number)=><div>
                    <p  
                        key={index}
                        className='text-[16px] text-[#ABABAB] w-max'
                    >
                        {item} 
                    </p>
                </div>)}
            </div>
        </div>
    </div>

const About = () => {
    // Constants:
    const experienceArr = [
        {
            id: 0,
            workDuration: 'July 22 - Aug 24',
            companyName: 'GROWW',
            designation: 'SDE II - Devops',
            currentlyWorking: false,
        },
        {
            id: 1,
            workDuration: 'Aug 24 - Present',
            companyName: 'Okta',
            designation: 'SDE II - Devops',
            currentlyWorking: true,
        },
    ]
    const extraInfoArr = [
        {
            id: 0,
            heading: 'Education',
            name: 'Graphic Era Deemed to be University',
            info: ['B.Tech (2017-21)'],
        },
        {
            id: 1,
            heading: 'Technical Skills',
            info: ['Docker', 'Kubernetes', 'MySql', 'Linux', 'Docker', 'Percona Monitoring', 'Terraform', 'GCP'],
        },
    ]

    // Return:
    return <>
    <div className='mt-[50px] mb-[100px]'>
        <h2 className='text-[39.063px] font-semibold mb-[15px]'>About</h2>
     
        <p className='text-[16px] text-[#888888] md:w-[80%] lg:w-[60%] leading-[27px]'> I am a Devops and Cloud enthusiast who like to work on different 
            technologies from containers to Prometheus and developing apps on Flutter.
            It all started with setting up openstack when I took down the internet
             for entire campus by mistake and from that day my technical journey entirely changed.
            You will find me learning new technology most of the time and brainstorming ideas 
            for new projects if not I will be helping someone by sharing my knowledge and helping my juniors.
            Currently, I’m seeking opportunities that will allow me to develop and promote technologies
             that help me to become a more reliable Devops engineer.
        </p>
 
        <div className='mt-[30px]'>
            {extraInfoArr?.map((extraInfo: ExtraInfoType, index: number)=>
                <AboutExtraInfoComponent 
                    key={index}
                    heading={extraInfo?.heading}
                    name={extraInfo?.name}
                    //icon={extraInfo?.icon}
                    info={extraInfo?.info}
                />
            )}
            
        </div>
        <div className='mt-[60px]'>
            <h3 className='text-[25px] font-bold '>Experience</h3>
                <TimelineComponent
                    experienceArr={experienceArr}
                />
        </div>
        <div className='mt-[60px] '>
            <div className='text-[20px] '>
                <span className='mr-[2.5px]'>Do you feel ready to review my </span>  
                <a
                    href = 'http://localhost:3000/images/resume.pdf' 
                    className='text-primary-red text-[20px] cursor-pointer contents w-max decoration-0 hover: hover:shadow-[0_2px_0_0_#E73D3D]'
                    download = {true}
                >
                    Resume 
                </a> ?
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default About