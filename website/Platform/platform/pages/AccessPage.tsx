

import Login from "../components/Login"
import Registers from "../components/Register";
import {useState, useEffect} from "react";

export default function AccessPage() {

    const [Register, setRegister] = useState(false);
    
    return (

        Register ? (
            <Registers setRegister={setRegister}/>
        ) : (
            <Login setRegister={setRegister}/>
        )   

    )

}