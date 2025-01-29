// Packages:
import { useState, useEffect } from "react"

// Axios:
import axios from 'axios'

// React Toastify:
import { ToastContainer, toast } from 'react-toastify'

// Components:
import ArticleComponent from "../components/articleCard"
import Footer from "../components/footer"

const Articles = () => {
    // Constants:
    const tabs  = ['docker', 'kubernetes', 'all']

    // States:
    const [currentTab, setCurrentTab] = useState<string>(tabs[tabs?.length-1])
    const [articlesArray, setArticlesArray] = useState<any[]>()

    // Effects:
    useEffect(()=>{
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anantjakhmola9')
                setArticlesArray(response?.data?.items)
            } catch (error) {
                toast.error(`${error}`, { 
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: 'dark',
                })
            } 
        }

        fetchArticles()
    }, [])

    return <>
        <ToastContainer limit={3} />
        <div className='mt-[50px] mb-[100px] '>
        <div className='flex flex-wrap gap-[15px] justify-between items-center mb-[15px]'>
            <h2 className='text-[39.063px] font-semibold '>Articles & Insights</h2>
            {/* <div className='flex gap-[30px]'>
                {tabs?.map((tab:string, index:number)=>
                <div 
                    key={index}
                    className={`${currentTab === tabs[index] ? 'text-primary-red font-bold cursor-default pointer-events-none' : 'text-[#ABABAB] font-light'} hover:text-primary-red hover:shadow-[0_1px_0_0_#e73d3d] cursor-pointer text-[20px]`}
                    onClick={()=>setCurrentTab(tabs[index])}
                >
                    {tab}
                </div>)}
            </div> */}
        </div>
       
        <div className='mt-[20px] grid grid-cols-[repeat(4_,_1fr)] gap-[24px]'>
            {articlesArray?.map?.((article:any, index:number)=>
            <ArticleComponent 
                key={index}
                article={article}
                currentActiveTab={currentTab}
            />
            )}
        </div>
    </div>
    <Footer/>
    </>
}

export default Articles