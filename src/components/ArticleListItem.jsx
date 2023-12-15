import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ArticleListItem({ article }) {
  const ctx = useContext(CartContext);
  const [deleteServerMessage, setDeleteServerMessage] = useState(null);

  let id = article._id;

  console.log(id);

  const deleteArticle = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/article/" + id,
        {
          method: "DELETE",
        }
      );
      const resJson = await response.json();
      console.log(resJson);

      setDeleteServerMessage(resJson.message);
      // Remove message -> Toast
      setTimeout(() => {
        setDeleteServerMessage("");
      }, 5000); // Adjust the timeout value as needed
    } catch (error) {
      console.error("Failed to delete Article:", error.message);
    }
  };

  return (
    <div>
      {deleteServerMessage ? (
        <div className="p-5 bg-red-400 text-black font-bold text-center uppercase rounded-md w-[100%]">
          {deleteServerMessage}
        </div>
      ) : (
        <div className="flex flex-row gap-5 mt-8 rounded-3xl border border-primary">
          <img
            src={import.meta.env.VITE_BACKEND + "/" + article.imagepath}
            alt=""
            className="w-2/12 rounded-3xl"
          />
          <div className="mt-10">
            <h2 className="text-3xl">{article.articlename}</h2>
            <p className="my-5 font-mono">{article.articledescription}</p>
            <div className="flex gap-3 items-baseline">
              <p className="text-xl">{article.articleprice} Euro</p>
              <div className="flex flex-col gap-4 m-4">
                <button
                  onClick={() =>
                    ctx.setCart((prev) => {
                      return [...prev, article];
                    })
                  }
                  className="btn btn-primary"
                >
                  In den Warenkorb
                </button>
                <button onClick={deleteArticle} className="btn btn-warning">
                  Artikel entfernen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
