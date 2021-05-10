import ArticlesList from '../components/ArticlesList';
import ArticleContent from './ArticleContent';
import NotFoundPage from './NotFoundPage'
import CommentsList from '../components/CommentsList'
import { useState, useEffect } from 'react';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';


export default function ArticlePage({ match }) {

    
    const name = match.params.name
    const article = ArticleContent.find((article) => article.name === name)

    const [articleInfo, setArticleInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://vin-blog.herokuapp.com/api/articles/${name}`)
            const body = await result.json();
            setArticleInfo(body)
        }
        fetchData()
    },[name])

    console.log(articleInfo, 'info')

    if (!article) return <NotFoundPage />

    const otherArticles = ArticleContent.filter((article) => article.name !== name)

    return (
        <>
            <h1> {article.title}  </h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />

            {article.content.map((paragraph, key) => (
                <p key={key}> {paragraph} </p>
            ))}

            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

            <h3> Other Articles: </h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
}
