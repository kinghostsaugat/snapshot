import React from "react";
import SearchForm from "./Form";
import Navigation from "./Navigation";

 const Header = ({navigate, handleSubmit}) => {
    return (
        <>
        <h1>Snapshot</h1>
        <SearchForm navigate={navigate} handleSubmit={handleSubmit}/>
        <Navigation />
        </>
    )
}
export default Header