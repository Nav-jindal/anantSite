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
    return <div className='mt-[50px] mb-[100px] '>
        <form className='w-[50%]' onSubmit={handleSubmit(contactSubmit)} noValidate>
            <div className='flex items-center justify-between'>
                <h2 className='text-[39.063px] font-semibold mb-[15px]'>Contact</h2>
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
                className='w-full mt-[15px] px-[16px] py-[10px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
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
                    className='w-full mt-[15px] px-[16px] py-[10px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
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
                className='w-full mt-[15px] px-[16px] py-[10px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none rounded-[12px] hover:border-[#ffffff] focus-visible:border-[#ffffff]'
                {...register('contactMessage', {
                    required : {
                        value: true,
                        message: 'Pleae explain your query'
                    }
                })}>

                </textarea>
                <p className='mt-[10px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.contactMessage?.message}</p>
            </div>
            <button className='float-right mt-[30px] bg-primary-red px-[20px] py-[10px] rounded-[12px] cursor-pointer hover:bg-primary-darkRed focus-visible:bg-primary-darkRed' type='submit'>Send my message</button>
        </form>
    </div>
}

export default Contact