import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
    const ctx = useContext(CartContext)
    const [cartitem, setCartItem] = useState([])
    const [price, setPrice] = useState(0)

    async function buy() {
        for (const item of cartitem) {
            item.articleprice = Number(item.articleprice)
        }
        await fetch(import.meta.env.VITE_BACKEND + '/api/invoice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartitem)
        })
        ctx.setCart([])
        setCartItem([])
        setPrice(0)
    }

    useEffect(() => {
        const tempArr = [...ctx.cart]
        console.log(tempArr)
        if (tempArr.length > 0) {
            const sum = tempArr.reduce((acc, ele) => { return acc + Number(ele.articleprice) }, 0)
            console.log(sum)
            setCartItem(tempArr)
            setPrice(sum)
        }

    }, [ctx.cart])

    return (
        <div className="w-8/12">
            <p>Warenkorb</p>
            {ctx?.cart &&
                cartitem.map((article, key) => <CartItem article={article} key={key} />)
            }
            <p className="text-lg">{price} €</p>
            <button onClick={buy} className="mt-5 w-full btn btn-accent">Kaufen</button>
        </div>
    )
}