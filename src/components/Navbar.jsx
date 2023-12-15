import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'} className="text-xl btn btn-ghost">SuperShop</Link>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    <li><Link to={'/add'}>Artikel hinzufügen</Link></li>
                    <li>
                        <Link to={'/dash'}>Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}