import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.warn('action add to cart called', data);
    return {
        type: ADD_TO_CART,
        data
    };
}

export const removeFromCart = (data) => {
    console.warn('action remove from cart called', data);
    return {
        type: REMOVE_FROM_CART,
        data
    };
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    };
}