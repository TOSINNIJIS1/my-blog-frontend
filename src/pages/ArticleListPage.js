import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent'

export default function ArticleListPage() {
    return (
        <>
           <h1> Article List Page</h1> 
           <ArticlesList articles={ArticleContent} />
        </>
    )
}
