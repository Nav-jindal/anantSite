// Import:
import { useState } from "react"
import { useForm } from "react-hook-form"
import { IconContext } from 'react-icons'
import { RiLinkedinBoxFill, RiInstagramFill, RiMediumFill  } from "react-icons/ri"

// React Toastify:
import { ToastContainer, toast } from 'react-toastify'

// React Spinners:
import { ClipLoader } from 'react-spinners'

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
        reset,
        formState: { errors }
    } = useForm<ContactForm>({
        mode: 'all'
    })

    // States:
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Function:
    const contactSubmit = async (data: ContactForm) => {
        try {
            setIsLoading(true)
            const form = new FormData();
            form.append('Fullname', data?.name)
            form.append('Email', data?.contactEmail)
            form.append('Message', data?.contactMessage)

            // Sending to data to owner's email
            const response = await fetch('https://formsubmit.co/ajax/jindalnav23@gmail.com', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: form,
            });

            if (response.ok) {
                setIsLoading(false)
                toast.success('Message sent successfully!', { 
                    position: 'top-right',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: 'dark',
                })
                reset() // Reset form after successful submission
            } else {
                setIsLoading(false)
                toast.warning('Something went wrong. Message not sent!', { 
                    position: 'top-right',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: 'dark',
                })
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(`${error}`, { 
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'dark',
            })
        }
        
    }

    
    return <>
        <ToastContainer  limit={3}/>
        {isLoading && <div className='z-[100] pointer-events-none fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[rgba(255,255,255,0.80)] flex justify-center items-center'>
            <ClipLoader size={60} color="#0d0d0d" />
        </div>}
        
    <div className={`${isLoading ? 'pointer-events-none' : ''} mt-[50px] mb-[125px]`}>
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
                className='text-primary-red text-[20px] mt-[50px] cursor-pointer group flex gap-[25px] items-center sm:float-right'>
                    <span className='group-hover:font-medium'> Send the message </span>
                    <svg width="44" height="17" viewBox="0 0 44 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-8 transition-all'>
                        <path d="M1 8.5H42M42 8.5L35 1.5M42 8.5L35 15.5" stroke="#E73D3D" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
            </button>
        </form>
    </div>
    </>
}

export default Contact