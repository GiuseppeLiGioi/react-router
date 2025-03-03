import { Outlet } from "react-router-dom";


const PostsList = () => {
    return(
        <>
        <Header />
        <Outlet />
        <footer>Footer</footer>
        </>
        
    )
}

export default PostsList;