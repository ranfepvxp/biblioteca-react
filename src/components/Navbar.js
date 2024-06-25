import React,{ useState,useEffect, useContext } from "react";
import MainContext from '../MainContext';
import LoginButton from "../LoginButton";

function Navbar()
{
    
    const {user,setUser,componentState,setComponentState} = useContext(MainContext);


    return (
        <div className="container">
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">
            {
            user!=null ? `Bienvenido ${user}!` :  <LoginButton login={() => setComponentState('login') } />
    } {componentState} </span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
        <a class="py-2 text-dark text-decoration-none" href="#">Pricing</a>
      </nav>
    </div>
    </div>
    );
}

export default Navbar;