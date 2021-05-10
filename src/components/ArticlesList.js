import { Link } from 'react-router-dom'

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link id="articles-list-item" key={key} to={`/articles/${article.name}`}>
         <h3> {article.title} </h3>
         <p> {article.content[0].substring(0, 70)}... </p>
        </Link>       
    ))}
    </>
);

export default ArticlesList