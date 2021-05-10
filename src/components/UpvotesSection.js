import axios from 'axios';

export default function UpvotesSection({ articleName, upvotes, setArticleInfo }) {
    const upvoteArticle = async () => {
        const result = await axios.post(`https://vin-blog.herokuapp.com/api/articles/${articleName}/upvote`)
        const body = result.json()
        setArticleInfo(body)
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}> Add Upvote </button>
            <p> This post has been upvoted {upvotes} times </p>
        </div>
    )
}
