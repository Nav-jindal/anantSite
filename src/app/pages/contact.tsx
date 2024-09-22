// Import:
import { useForm } from "react-hook-form"
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiInstagramFill, RiMediumFill  } from "react-icons/ri"

// Typescript:
interface ContactForm {
    name: string,
    contactEmail: string,
    contactMessage: string
}

const Contact = () => {
    // Constant:
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<ContactForm>({
        mode: 'all'
    })

    // Function:
    const contactSubmit = (data: ContactForm) => {
        console.log('data: ',data)
    }

    
    return <div className='mt-[50px] mb-[125px] '>
        <form className='md:w-[75%] lg:w-[50%]' onSubmit={handleSubmit(contactSubmit)} noValidate>
            <div className='flex sm:items-center justify-between flex-col sm:flex-row'>
                <h2 className='text-[39.063px] font-semibold mb-[15px]'>Let's Connect</h2>
                <div className='flex items-end gap-[20px] py-[24px]'>
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
            </div>
            
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Name</h3>
                <input 
                className='w-full mt-[15px] px-[16px] py-[10px] bg-[#0d0d0d] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
                type='text'
                {...register('name', {
                    required: {
                        value: true,
                        message: 'Please, enter your name'
                    }
                })}/>
                <p className='mt-[10px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.name?.message}</p>
            </div>
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Email</h3>
                <input 
                    className='w-full mt-[15px] px-[16px] py-[10px] bg-[#0d0d0d] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
                    type='email' 
                    {...register('contactEmail', {
                    required: {
                        value: true,
                        message: 'Please, enter your email'
                    }
                })}/>
                <p className='mt-[10px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.contactEmail?.message}</p>
            </div>
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Message</h3>
                <textarea 
                className='w-full mt-[15px] px-[16px] py-[10px] bg-[#0d0d0d] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
                {...register('contactMessage', {
                    required : {
                        value: true,
                        message: 'Pleae explain your query'
                    }
                })}>

                </textarea>
                <p className='mt-[10px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.contactMessage?.message}</p>
            </div>
            <button 
                type='submit'
                className='text-primary-red text-[20px] mt-[25px] cursor-pointer group flex gap-[25px] items-center float-right'>
                    <span className='group-hover:font-medium'> Send the message </span>
                    <svg width="44" height="17" viewBox="0 0 44 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-8 transition-all'>
                        <path d="M1 8.5H42M42 8.5L35 1.5M42 8.5L35 15.5" stroke="#E73D3D" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
            </button>
            {/* <button className='float-right mt-[30px] bg-primary-red px-[20px] py-[10px] rounded-[12px] cursor-pointer hover:bg-primary-darkRed focus-visible:bg-primary-darkRed' type='submit'></button> */}
        </form>
    </div>
}

export default Contact