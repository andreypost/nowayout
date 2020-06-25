import React from 'react';
import { Link } from 'react-router-dom';

export const GameCards = (props) => {
    return (
        <div className={'item pointer card__vision ' + props.datos.clase01}>
            <Link to={props.datos.href} >
                {props.children}
                <div className="card__title white">
                    <h2 className="sansBold">{props.datos.title}</h2>
                    <p className={'sansThin card__text ' + props.datos.clase02}>{props.datos.descript}</p>
                </div>
            </Link>
        </div>
    )
}