import { useState } from "react"
import Navbar from "../components/Navbar"

export default function AddArticle() {
    const [previewURL, setpreviewURL] = useState(null)

    function preview(e) {
        const url = URL.createObjectURL(e.target.files[0])
        setpreviewURL(url)
    }

    async function addArticle(e) {
        e.preventDefault()
        const form = new FormData(e.target)

        await fetch(import.meta.env.VITE_BACKEND + '/api/article', {
            method: 'POST',
            body: form
        })
    }
    return (
        <>
            <Navbar />
            <main className="">

                <form onSubmit={addArticle} className="flex flex-col gap-5 items-center mt-5">
                    <input type="text" placeholder="Artikelbezeichnung" name="articlename" className="w-full max-w-xs input input-bordered" />
                    <input type="text" placeholder="Artikelbeschreibung" name="articledescription" className="w-full max-w-xs input input-bordered" />
                    <input type="number" placeholder="Artikelpreis" name="articleprice" className="w-full max-w-xs input input-bordered" />
                    <input onChange={preview} type="file" name="articleimage" className="w-full max-w-xs file-input file-input-bordered file-input-primary" />
                    <input type="submit" value="anlegen" className="w-full max-w-xs btn btn-primary" />
                </form>
                {previewURL &&
                    <div className="flex justify-center mt-10 truncate rounded-3xl">
                        <img src={previewURL} alt="" className="w-5/12 rounded-3xl" />
                    </div>

                }
            </main>
        </>
    )
}