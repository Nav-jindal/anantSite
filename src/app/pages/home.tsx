import Footer from "../components/footer"

const Home = () => {
    return <>
        <div className='h-full flex items-center min-h-[calc(100vh-161px)]'>
        <div className='leading-[60px]'>
            {/* <h3 className='text-[25px] font-semibold'>Hi, I'm</h3> */}
            <h3 className='text-[#505050] text-[20px] whitespace-nowrap uppercase tracking-wider font-bold'>Devops Engineer</h3>
            <h1 className='text-[48.828px] font-semibold uppercase tracking-wider'>Anant Jakhmola</h1>
            {/* <div className='flex items-center gap-[15px]'>
                <span className='block h-[2px] w-full bg-primary-red'></span>
            </div> */}
            <button className='text-primary-red text-[25px] mt-[25px] cursor-pointer group flex gap-[25px] items-center'>
                <span className='group-hover:font-medium'>Download Resume </span>
                <svg width="44" height="17" viewBox="0 0 44 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-6 transition-all'>
                    <path d="M1 8.5H42M42 8.5L35 1.5M42 8.5L35 15.5" stroke="#E73D3D" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
        <div className='h-[65%] absolute right-0 bottom-0 z-[50]'>
            <img className='object-cover h-full' src='./images/background.svg' alt='devops engineer'/>
        </div>
    </div>
    <Footer/>
    </>
}

export default Home