import React from "react";
import herokuIcon from "../images2/icons/icons8-heroku-50.png";
import mongoDBIcon from "../images2/icons/icons8-mongodb-50.png";
import expressIcon from "../images2/icons/icon-expressjs.png";
import reactIcon from "../images2/icons/icons8-react-native-50.png";



function SecretsIcons () {
    return(
        <div className="icons">
            <img className="iconsImg" src={mongoDBIcon} />
            <img className="iconsImg" src={herokuIcon} />
            <img className="iconsImg" src={expressIcon} />  
        </div> 
    ) 
}

function KeeperIcons (){
    return(
        <div className="icons">
            <img className="iconsImg" src={reactIcon} />
            <img className="iconsImg" src={herokuIcon} />
            <img className="iconsImg" src={mongoDBIcon} />  
        </div> 
    )
}

export default SecretsIcons
export  { KeeperIcons };
