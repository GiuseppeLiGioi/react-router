import { Outlet } from "react-router-dom";


const PostsList = () => {
    return(
        <>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
        </>
        
    )
}

export default PostsList;