import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";


import "../../styles/header.css";

const nav__links = [
    {
        display: "Hooome",
        path: "/home",
    },
    {
        display: "Foods",
        path: "/foods",
    },
    {
        display: "Cart",
        path: "/cart",
    },

];

const Header = () => {

    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    const headerRef = useRef(null)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            }
            else {
                headerRef.current.classList.remove('header__shrink')
            }
            return () => window.removeEventListener('scroll')

        })
    }, [])
    return (
        <header className="header" ref={headerRef} >
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Treat</h5>
                    </div>
                    {/* ======= menu ======= */}
                    <div className="navigation" ref={menuRef}>
                        <div
                            className="menu d-flex align-items-center gap-5"

                        >

                            {nav__links.map((item, index) => (
                                <NavLink
                                    onClick={toggleMenu}
                                    to={item.path}
                                    key={index}
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* ======== nav right icons ========= */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" onClick={toggleCart}>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">{totalQuantity}</span>
                        </span>
                        <span className="user">
                            <Link to='/login'><i class="ri-user-line"></i></Link>
                        </span>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header >
    );
};

export default Header;
