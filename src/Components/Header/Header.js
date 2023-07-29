import React, { useState } from "react";
import Styles from './Header.module.scss'

import LogoImage from "../Logo/LogoImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [menuBar, setMenuBar] = useState(false)

    function handleMenuBar() {
        setMenuBar(!menuBar)
    }

    return (
        <div className={Styles.headerContainer}>
            <div className={Styles.headerLogo}>
                <LogoImage
                    height="15rem"
                />
            </div>
            <nav className={menuBar ? Styles.headerMenuResponsive : Styles.headerMenu}>
                <ul>
                    <li>
                        <a href="#home">Início</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#services">Serviços</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#contacts">Contatos</a>
                    </li>
                </ul>
            </nav>
            <div
                className={Styles.headerIcon}
                onClick={() => handleMenuBar()}
            >
                {menuBar
                    ? <FontAwesomeIcon icon={faClose} />
                    : <FontAwesomeIcon icon={faBars} />}
            </div>
        </div>
    )
}