import React from "react";

import "../../../styles/product-card.css";

import productImg from "../../../assets/images/product_2.1.jpg";
import { useDispatch } from 'react-redux'

import { cartActions } from "../../../store/shopping-cart/cartSlice"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);
    console.log(cart)


    const deleteItem = (event) => {
        dispatch(cartActions.deleteItem(id));
        event.stopPropagation();
        toast.success(`${title} removed from cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
        });
    };


    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price
            })

        );
        toast.success(`${title} added to cart`, {
            position: "top-right",
            autoClose: 2000, // Auto close the toast after 2 seconds
            hideProgressBar: true,
        });
    };

    return (
        <div className="product__item d-flex flex-column justify-content-between">
            <div className="product__content">
                <img className="product__img w-50" src={image01} alt="Pizza" />
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-between">
                <span className="product__price mb-2">{price} € </span>
                {
                    cart.some((p) => p.id == id) ? <button className="addTOCART__btn" onClick={event => deleteItem(event)}>
                        Remove item


                    </button> :
                        <button className="addTOCART__btn" onClick={addToCart}>
                            Add to Cart


                        </button>
                }

            </div>
        </div>
    );
};

export default ProductCard;
