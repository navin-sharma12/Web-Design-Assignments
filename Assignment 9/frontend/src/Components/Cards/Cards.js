import React from "react";
import "../../styles.css";

const Card = ({ header, cardContent, isShowButton}) => {
    return (
        <div className="float_container">
            <label className="float-child-card">{header}<br/>{cardContent}
            {isShowButton && <button className="card_button">Apply</button>}</label>
        </div>
    );
};
export default Card;