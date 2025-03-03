import { useState, useEffect } from "react";
import {axios} from "axios"

const Posts = () =>{

    const { posts, setPosts } = useState ([]);

    useEffect( () => {
        axios.get('http://localhost:3000/api/posts')
        .then( res => setPosts( res.data ) )

    }, [])


    return(
   <>
   <div>
    
   </div>
   </>
)
}

export default Posts;