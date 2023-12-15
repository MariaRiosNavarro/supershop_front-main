import ArticleList from "../components/ArticleList"
import { useEffect, useState } from "react"
import Cart from "../components/Cart"
import Navbar from "../components/Navbar"

function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function getArticle() {

            try {
                const response = await fetch(import.meta.env.VITE_BACKEND + '/api/article')
                const data = await response.json()
                setArticles(data)
            } catch (err) {
                console.log(err)
            }
        }
        getArticle()
    }, [])
    return (
        <>
            <Navbar />
            <h1 className="p-5 text-3xl">Der SuperShop</h1>
            <main className="flex gap-10 px-5">
                <ArticleList articles={articles} />
                <Cart />
            </main>
        </>
    )
}

export default Home
