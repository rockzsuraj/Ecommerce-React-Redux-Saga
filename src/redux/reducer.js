import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn('reducer called', action);
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            // console.warn('reducer called', action);
            data.length = data.length ? data.length - 1 : data;
            return [...data];
        case EMPTY_CART:
            // console.warn('reducer called', action);
            data = [];
            return data;
        default:
            return data;
    }
}