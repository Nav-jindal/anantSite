const Home = () => {
    return <div className='h-full flex items-center justify-'>
        <div className='leading-[60px]'>
            <h3 className='text-[23.04px] font-semibold'>Hi, I'm</h3>
            <h1 className='text-[47.776px] font-semibold uppercase tracking-wider'>Anant Jakhmola</h1>
            <div className='flex items-center gap-[15px]'>
                <span className='block h-[4px] w-full bg-primary-red'></span>
                <h2 className='text-primary-red text-[27.648px] font-semibold whitespace-nowrap uppercase tracking-wider'>Devops Engineer</h2>
            </div>
        </div>
        <div className='h-[80%] absolute bottom-0 right-[50px]'>
            <img className='object-cover h-full' src='./images/background.png' alt='devops engineer'/>
        </div>
    </div>
}

export default Home