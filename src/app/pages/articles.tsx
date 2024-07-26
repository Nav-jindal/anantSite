// Packages
import { useState } from "react"

// Components
import ArticleComponent from "../components/articleCard"
import Footer from "../components/footer"

// Typescript
export interface ArticleArrType {
    id?: number
    title: string
    timePassed: string
    tags: string[]
}
const Articles = () => {
    // Constants:
    const articleArr = [
        {
            id: 0,
            title: 'I met a Girl named Sakshi and I loved her a lot Part 1',
            timePassed: '2 weeks ago',
            tags: ['docker', 'tag2', 'tag3']
        },
        {
            id: 1,
            title: 'Devdas Phase Part 2',
            timePassed: '1 weeks ago',
            tags: ['tag1', 'docker', 'tag3']
        },
        {
            id: 2,
            title: 'Remincising Part 3',
            timePassed: '3 weeks ago',
            tags: ['tag1', 'kubernetes', 'tag3']
        },
    ]
    const tabs  = ['docker', 'kubernetes', 'all']

    // States:
    const [currentTab, setCurrentTab] = useState<string>(tabs[tabs?.length-1 ?? 0])

    return <>
        <div className='mt-[50px] mb-[100px] '>
        <div className='flex flex-wrap gap-[15px] justify-between items-center mb-[15px]'>
            <h2 className='text-[39.063px] font-semibold '>Articles</h2>
            <div className='flex gap-[30px]'>
                {tabs?.map((tab:string, index:number)=>
                <div 
                    key={index}
                    className={`${currentTab === tabs[index] ? 'text-primary-red font-bold cursor-default pointer-events-none' : 'text-[#ABABAB] font-light'} hover:text-primary-red hover:shadow-[0_1px_0_0_#e73d3d] cursor-pointer text-[20px]`}
                    onClick={()=>setCurrentTab(tabs[index])}
                >
                    {tab}
                </div>)}
            </div>
        </div>
       
        <div className='mt-[20px] grid grid-cols-[repeat(4_,_1fr)] gap-[16px]'>
            {articleArr?.map((article:ArticleArrType)=>
            <ArticleComponent 
                key={article?.id}
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