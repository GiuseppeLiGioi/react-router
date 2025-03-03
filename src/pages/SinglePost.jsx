import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
    const[singlePost, setSinglePost] = useState( {} )
    useEffect( () => {
        axios.get(`http://localhost:3000/api/posts/${id}`)
        .then(res => setSinglePost(res.data))

    }, [] )
    const { id, } = useParams()
    return(
        <>
        <h1> Singolo prodotto: {id} </h1>
        <h2> Titolo: {singlePost.title}</h2>

        </>

        

    )
}

export default SinglePost;