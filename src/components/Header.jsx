import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>

                    <NavLink to={'/'}>
                    Home
                    </NavLink>

                    </li>
                    <li>

                    <NavLink to={'/chisiamo'}>
                    Chi Siamo
                    </NavLink>

                    </li>
                    <li>
                        
                    <NavLink to={'/posts'}>
                    Posts
                    </NavLink>
                        
                   </li>
                </ul>
            </nav>
        </header>
        </>
        
    )
}

export default Header;