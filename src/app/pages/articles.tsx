// Components
import ArticleComponent from "../components/articleCard"

// Typescript
export interface ArticleArrType {
    id: number
    title: string
    tags: string[]
}
const Articles = () => {
    // Constants:
    const articleArr = [
        {
            id: 0,
            title: 'I met a Girl named Sak',
            tags: ['tag1', 'tag2', 'tag3']
        },
        {
            id: 1,
            title: 'I met a Girl named Sak',
            tags: ['tag1', 'tag2', 'tag3']
        },
        {
            id: 2,
            title: 'I met a Girl named Sak',
            tags: ['tag1', 'tag2', 'tag3']
        },
    ]
    return <div className='mt-[50px]'>
        <h2 className='text-[48.828px] font-semibold uppercase'>Articles</h2>
        <div className='mt-[20px] w-[60%] max-w-[60%]'>
            {articleArr?.map((article:ArticleArrType)=>
            <ArticleComponent 
                key={article?.id}
                id={article?.id + 1}
                title={article?.title}
                tags={article?.tags}
            />
            )}
        </div>
    </div>
}

export default Articles