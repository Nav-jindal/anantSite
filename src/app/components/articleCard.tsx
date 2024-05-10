// Typescript
import { ArticleArrType } from "../pages/articles"

const ArticleComponent = ({id, title, tags}: ArticleArrType) => {
    return <div className='bg-[#1C1C1C] px-[20px] py-[10px] rounded-[12px] flex gap-[20px] mb-[30px] items-center hover:bg-primary-red cursor-pointer'>
        <div className='text-[61.035px] font-bold text-secondary-black hover:text-white'>{(id) < 10 ? `0${id}` : id}</div>
        <div>
            <div className='text-[25px] font-bold'>{title}</div>
            <div className='mt-[10px] flex flex-wrap gap-[15px]'>
            {tags?.map((tag:string, index: number)=> 
            <p className='italic bg-[#000000] rounded-[12px] px-[12px] py-[2px] text-[#1C1C1C]'>{tag}</p>
            )}
            </div>
        </div>
    </div>
}

export default ArticleComponent