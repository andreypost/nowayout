import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../icons.svg';

export const Header = () => {
    useEffect(() => {
        let burger = document.querySelector('.header__burger')
        const burgerNav = (burger) => {
            const toggleIcons = () => {
                for (let i of burger.querySelectorAll('i')) {
                    i.classList.toggle('active')
                }
            }
            burger.onclick = () => {
                toggleIcons()
            }
        }
        burgerNav(burger)
        return () => {
            for (let i of burger.querySelectorAll('i')) {
                i.classList.remove('active')
            }
        }
    })
    return (
        <header className="section sansBold">
            <nav className="grid header__nav">
                <ul className="flexcentbet header__links">
                    <li className="header__burger relative pointer">
                        <i></i>
                        <i></i>
                        <i></i>
                    </li>
                    <li><Link to="/">Rooms</Link></li>
                    <li><Link to="/">Booking</Link></li>
                    <li><Link to="/">Contacts</Link></li>
                </ul>
                <Link to="/" className="header__logo">
                    <svg>
                        <use xlinkHref={`${icons}#logo`}></use>
                    </svg>
                </Link>
                <ul className="flexcentbet header__cabinet">
                    <li><a href="tel:+436606050000">+43 660 605 0000</a></li>
                    <li className="relative pointer">
                        <svg className="header__bag">
                            <use xlinkHref={`${icons}#shopingbag`}></use>
                        </svg>
                        <svg className="header__shop">
                            <use xlinkHref={`${icons}#basket`}></use>
                        </svg>
                        <span className="header__count px12 red">2</span>
                    </li>
                    <li className="flexcentbet header__lung">
                        <Link to="/" className="active">DE</Link>
                        <Link to="/">EN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
