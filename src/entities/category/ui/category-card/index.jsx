import React from 'react';

import s from './category.module.scss'
import {Link} from "react-router-dom";

export const CategoryCard = props => {
    const {category, image, count} = props

    return (
        <Link to={"/list?category=" + category} className={s.card}>
            <div className={s.card__label}>{category}</div>
            <div className={s.card__icon}><img src={image} alt={category}/></div>
            <div className={s.card__count}>{count}</div>
        </Link>
    );
};

