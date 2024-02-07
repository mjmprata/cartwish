import React, { useState, useEffect, useContext } from 'react'

import UserContext from '../../contexts/UserContext'
import CartContext from '../../contexts/CartContext'

import "./CartPage.css";
import config from '../../config.json'

import remove from "../../assets/remove.png";
import Table from "../Common/Table";
import QuantityInput from '../SingleProduct/QuantityInput';
import { checkoutAPI } from '../../services/orderServices';
import { toast } from 'react-toastify';

const CartPage = () => {
    const [subTotal, setSubTotal] = useState(0)
    const user = useContext(UserContext)

    const {cart, removeFromCart, updateCart, setCart} = useContext(CartContext)

    useEffect(() => {
      let total = 0
      cart.forEach(item => {
        total += item.product.price * item.quantity
      });
      setSubTotal(total)
    }, [cart])

    const checkout = () => {
        const oldCart = [...cart]
        setCart([])

        checkoutAPI().then(() => {
            toast.success("Order placed successfully.")
        }).catch(() => {
            toast.error("Something went wrong!")
            setCart(oldCart)
        })
    }

    return (
        <section className="align_center cart_page">
            <div className="align_center user_info">
                <img src={`${config.backendURL}/profile/${user?.profilePic}`} alt="User profile"/>
                <div>
                    <p className="user_name">{user?.name}</p>
                    <p className="user_email">{user?.email}</p>
                </div>
            </div>

            <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
                <tbody>
                    {cart?.map(({product, quantity}) => 
                        <>
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td className='align_center table_quantity_input'>
                                    <QuantityInput quantity={quantity}
                                                   stock={product.stock}
                                                   setQuantity={updateCart}
                                                   cartPage={true}
                                                   productId={product._id}/>
                                </td>
                                <td>${quantity * product.price}</td>
                                <td><img className="cart_remove_icon" 
                                         src={remove}
                                         alt="remove icon"
                                         onClick={() => removeFromCart(product._id)}/>
                                </td>
                            </tr>
                        </>)}
                </tbody>
            </Table>

            <table className="cart_bill">
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>${subTotal}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td>$5</td>
                    </tr>
                    <tr className='cart_bill_final'>
                        <td>Total</td>
                        <td>${subTotal + 5}</td>
                    </tr>
                </tbody>
            </table>

            <button className='search_button checkout_button' onClick={checkout}>
                Checkout
            </button>
        </section>
    )
}

export default CartPage