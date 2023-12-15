export default function CartItem({ article }) {
    return (
        <div className="flex flex-col border-b border-primary">
            <p className="text-lg">{article.articlename}</p>
            <p className="text-right">{article.articleprice} €</p>
        </div>
    )
}