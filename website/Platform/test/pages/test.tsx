import { useEffect } from "react";
import Head from "next/head";
import create from "zustand";
import Bearstore from "../data/bears";

import styles from "../styles/Home.module.css";


export default function Test() {

    const bears = Bearstore(state => state);

    return (
        <div>
            <h1>Ciaooo {bears.bears}</h1>
        </div>
    );
}