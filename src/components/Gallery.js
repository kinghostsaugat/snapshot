import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Gallery = () => {

    const { images, loading, runSearch } = useContext(PhotoContext);
    // console.log(runSearch('mountain'));

    return <>
        <h1>Gallery</h1>
    </>
}


export default Gallery;