import React, {useState} from "react";

function Jumbotron(){

    const [jumbo, setJumbo] = useState("Profile");

    return(
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3 text-secondary">
                    Contact</h1>
            </div>
        </div>
    )
};

export default Jumbotron;