import React from "react";

function Avatar(props) {
    if (props.size === "big"){
        return <img className="circle-img big" src={props.img} alt="avatar_img" />;
    } else {
        return <img className="circle-img" src={props.img} alt="avatar_img" />;
    }
}

export default Avatar;
