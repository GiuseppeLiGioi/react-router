import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><a href="#">

                    <NavLink to={'/'}>
                    Home
                    </NavLink>

                    </a></li>
                    <li><a href="#">

                    <NavLink to={'/chisiamo'}>
                    Chi Siamo
                    </NavLink>

                    </a></li>
                    <li><a href="#">
                        
                    <NavLink to={'/posts'}>
                    Posts
                    </NavLink>
                        
                    </a></li>
                </ul>
            </nav>
        </header>
        </>
        
    )
}

export default Header;