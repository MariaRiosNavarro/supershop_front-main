import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

export default function Dashboard() {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        async function getOrders() {
            const response = await fetch(import.meta.env.VITE_BACKEND + '/api/invoice')
            const data = await response.json()
            setOrders(data)
        }
        getOrders()
    }, [])
    return (
        <>
            <Navbar />
            <main className="flex gap-10 justify-around">
                <div>
                    <h1 className="text-2xl">Referenzierte Artikel</h1>
                    {orders &&
                        orders.ref.map(order => {
                            return (
                                <div className="p-5 w-full border border-primary" key={order._id}>
                                    <p>Kunde {order.kunde}</p>
                                    <p>Gesamtpreis: {order.gesamtpreis} €</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="text-2xl">Embedded Artikel</h1>
                    {orders &&
                        orders.emb.map(order => {
                            return (
                                <div className="p-5 w-full border border-primary" key={order._id}>
                                    <p>Kunde {order.kunde}</p>
                                    <p>Gesamtpreis: {order.gesamtpreis} €</p>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}