// Packages:
import { useState, useEffect } from "react"

// Typescript

interface ArticleComponentType {
    article: any
    currentActiveTab: string
}

const ArticleComponent = ({ article, currentActiveTab }: ArticleComponentType) => {
    // States:
    const [isTagPresent, setIsTagPresent] = useState<boolean>(false)

    // Effects:
    useEffect(()=>{ 
        if(currentActiveTab !== 'all')
            setIsTagPresent(article.categories.includes(currentActiveTab))
        else 
            setIsTagPresent(true)
    },[currentActiveTab, article.categories]) 

    return <a   className={`${isTagPresent ? 'flex' : 'hidden'} group col-span-2 min-h-[170px] flex-col justify-between bg-[#1D1C1C] px-[18px] py-[14px] rounded-[12px] hover:bg-primary-red`} 
                href={`${article?.link}`}
                target="_blank"
                rel="noreferrer"
                >
            <div>
                <div className='text-[25px] mb-[12px] font-medium'>{article?.title}</div>
                <p className='font-medium text-[#ABABAB] group-hover:text-white'>Published on: {article?.pubDate.split(' ')[0]}</p>
            </div>
            <div className='mt-[30px] gap-[30px]'>
                <div className='flex flex-wrap gap-[12px]'>
                    {article?.categories?.map((tag:string, index: number)=> 
                    <p className='bg-[#353535] text-[12.8px] font-medium rounded-[12px] px-[10px] py-[6px] text-[#ABABAB] group-hover:bg-primary-darkRed group-hover:text-white' key={index}>{tag}</p>
                    )}
                </div>
            </div>
            
    </a>
}

export default ArticleComponent