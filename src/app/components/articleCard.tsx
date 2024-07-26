// Packages:
import { useState, useEffect } from "react"

// Typescript
import { ArticleArrType } from "../pages/articles"
interface ArticleComponentType {
    article: ArticleArrType
    currentActiveTab: string
}

const ArticleComponent = ({ article, currentActiveTab }: ArticleComponentType) => {
    // States:
    const [isTagPresent, setIsTagPresent] = useState<boolean>(false)

    // Effects:
    useEffect(()=>{ 
        if(currentActiveTab !== 'all')
            setIsTagPresent(article.tags.includes(currentActiveTab))
        else 
            setIsTagPresent(true)
    },[currentActiveTab, article.tags])   

    return <div className={`${isTagPresent ? 'flex' : 'hidden'} group col-span-2 min-h-[170px] flex-col justify-between bg-[#1D1C1C] px-[18px] py-[14px] rounded-[12px] hover:bg-primary-red cursor-pointer`}>
            <div className='text-[25px]'>{article?.title}</div>
            <div className='mt-[30px] flex justify-between gap-[30px]'>
                <div className='flex flex-wrap gap-[12px]'>
                    {article?.tags?.map((tag:string, index: number)=> 
                    <p className='bg-[#353535] text-[12.8px] font-medium rounded-[12px] px-[16px] py-[6px] text-[#ABABAB] group-hover:bg-primary-darkRed group-hover:text-white' key={index}>{tag}</p>
                    )}
                </div>
                <p className='font-medium text-[#ABABAB] group-hover:text-white'>{article?.timePassed}</p>
            </div>
            
    </div>
}

export default ArticleComponent