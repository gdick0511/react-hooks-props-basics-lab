import React from "react";

function Links(props) {
    return (
        <div>
            <h3>
               Links
               <a href={props.github}>{props.github}</a>
               <a href={props.linkedin}>{props.linkedin}</a>
            </h3>
        </div>
    )
}

export default Links;