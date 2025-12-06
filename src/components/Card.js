import React from "react";
import 'tachyons/css/tachyons.min.css';

const Card = ({id,name,username,email}) => {
    const url = `https://robohash.org/${id}?200x200`
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img src={url} alt={username}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;