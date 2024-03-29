export default function UpvotesSection({ articleName, upvotes, setArticleInfo }) {
    const upvoteArticle = async () => {
        const result = await fetch(`https://vin-blog.herokuapp.com/api/articles/${articleName}/upvote`, {
            method: 'POST',
        })
        const body = await result.json()
        setArticleInfo(body)
    }

    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}> Add Upvote </button>
            <p> This post has been upvoted {upvotes} times </p>

        </div>
    )
}
