import React from "react";
import Header from "../../components/Header/Header";


export default function Home({user, handleLogout}){
    return(
        <Header user={user} handleLogout={handleLogout} />
    )
}