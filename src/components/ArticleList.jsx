import ArticleListItem from "./ArticleListItem";

export default function ArticleList({ articles }) {
    if (articles.length == 0) {
        return (
            <div>
                <p>Wir haben aktuell keine Artikel</p>
            </div>
        )
    }
    return (
        <div>
            {articles.map(article => <ArticleListItem article={article} key={article._id} />)}
        </div>
    )
}