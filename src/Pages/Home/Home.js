import React from "react";

import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";

import Styles from './Home.module.scss'

export default function Home() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className={ Styles.main }>
                <Main />
            </main>
        </div>
    )
}