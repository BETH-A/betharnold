import React from "react";
import herokuIcon from "../images2/icons/icons8-heroku-50.png";
import mongoDBIcon from "../images2/icons/icons8-mongodb-50.png";
import expressIcon from "../images2/icons/icon-expressjs.png";


function SecretsIcons () {
    return(
        <div className="icons">
        <img className="iconsImg" src={mongoDBIcon} />
        <img className="iconsImg" src={herokuIcon} />
        <img className="iconsImg" src={expressIcon} />
        
    </div> 
    ) 
}


export default SecretsIcons ;