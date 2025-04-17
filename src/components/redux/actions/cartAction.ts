import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../utility"
import { IProduct } from "../../product/Products"

export const addToCart = (product: IProduct) => {
    return{
        type: ADD_TO_CART,
        payload: product
}
}

export const removeFromCart = (id: string) => {
    return{
        type: REMOVE_FROM_CART,
        payload: id
}
}