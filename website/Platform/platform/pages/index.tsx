import { useEffect } from "react";
import Head from "next/head";
import create from "zustand";
import UserStore from "../data/user";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Test from "./test";

import HomePage from "./HomePage";
import AccessPage from "./AccessPage";








export default function Home() {


  const UserData = UserStore((state) => state);

  const [userData, SetuserData] = useState({});

  /* 
    Per ottenere costantemente gli aggiornamenti dell'utente generiamo
    una funzione che viene richiamata ad ogni cambiamento dello store Utente 
    faremo poi un subscribe ai cambiamenti dello store Utente specificando che dovrà chiamare la funzione 
    ogni volta che cambia lo store
  */

  const update = () => {

    SetuserData(UserData);

    



  }
  const UpdateChecker = UserStore.subscribe(update);

  return (
    UserData.identifier === "" ? (
      <AccessPage/>
    ) : (
      <HomePage Data={UserData}/>
      // https://github.com/notiflix/Notiflix
      // https://dev.to/narottam04/free-tailwind-components-for-your-next-project-2gka
      // https://codepen.io/robstinson/pen/pobJaKa
    )
  )

  
  
}
