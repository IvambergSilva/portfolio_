import React from "react";

import Logo from '../../Assets/Images/Logo.svg'
import Symbol from '../../Assets/Images/Symbol.svg'

import './LogoImage.scss'

export default function LogoImage(props) {

    let imageRef = {}
    props.symbol ? imageRef = Symbol : imageRef = Logo
  
    const commonStyles = {}
    if (props.height) commonStyles.height = props.height

    

    return (
        <div className="logoContainer">
            <img
                src={imageRef}
                alt="Logo do portfolio" className="logoImage"
                style={commonStyles}
            />
        </div>
    )
}