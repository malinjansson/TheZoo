import "./../styles/layout.scss";
import { NavLink, Outlet } from "react-router"

export const Layout = () => {
    return (
        <>
        <header>
            <nav>
                <div className="the-zoo"><NavLink to={"/"}>The Zoo</NavLink></div>
                <ul>
                    <li>
                        <NavLink to={"/"}>Hem</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/animals"}>Djur</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <span>
            <NavLink to={"/animals"}>http://localhost:5173/animals</NavLink>
            </span>
        </footer>
        </>
    )
}