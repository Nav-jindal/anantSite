// Import:
import { useForm } from "react-hook-form"

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
    return <div className='mt-[50px] flex gap-[20px] '>
        <form className='basis-[50%]' onSubmit={handleSubmit(contactSubmit)} noValidate>
            <h2 className='text-[33.178px] font-semibold'>Contact</h2>
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Name</h3>
                <input 
                className='w-full mt-[5px] px-[12px] py-[6px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none focus-visible:border-[#ffffff]'
                type='text'
                {...register('name', {
                    required: {
                        value: true,
                        message: 'Please, enter your name'
                    }
                })}/>
                <p className='mt-[5px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.name?.message}</p>
            </div>
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Email</h3>
                <input 
                    className='w-full mt-[5px] px-[12px] py-[6px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none focus-visible:border-[#ffffff]'
                    type='email' 
                    {...register('contactEmail', {
                    required: {
                        value: true,
                        message: 'Please, enter your email'
                    }
                })}/>
                <p className='mt-[5px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.contactEmail?.message}</p>
            </div>
            <div className='mt-[20px]'>
                <h3 className='text-[23.04px]'>Message</h3>
                <textarea 
                className='w-full mt-[5px] px-[12px] py-[6px] bg-[transparent] border-[2px] border-solid border-[#454545] focus-visible:outline-none focus-visible:border-[#ffffff]'
                {...register('contactMessage')}>

                </textarea>
                <p className='mt-[5px] text-primary-red text-[14px] italic font-semibold tracking-[1px]'>{errors?.contactMessage?.message}</p>
            </div>
            <button className='mt-[15px] bg-primary-red px-[12px] py-[8px] rounded-[10px] cursor-pointer focus-visible:bg-primary-darkRed' type='submit'>Send my message</button>
        </form>
    </div>
}

export default Contact