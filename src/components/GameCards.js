import React from 'react';
import { Link } from 'react-router-dom';

export const GameCards = (props) => {
    return (
        <Link to={props.datos.href} className="item flex card__vision pointer">
            <img src={props.datos.image} alt="banner" />
            {props.children}
            <div className="card__title white">
                <h2 className="sansBold">{props.datos.title}</h2>
                <p className={'sansThin relative card__text ' + props.datos.clase}>{props.datos.descript}</p>
            </div>
        </Link>
    )
}