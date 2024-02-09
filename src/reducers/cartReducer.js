const cartReducer = (cart, action) => {

  switch (action.type) {

    case "ADD_TO_CART":
      const updatedCart = [...cart]

      const {product, quantity} = action.payload;
      const productIndex = updatedCart.findIndex(item=>item.product._id === product._id)

  
      if (productIndex === -1) {
        updatedCart.push({product, quantity})
      } else {
        updatedCart[productIndex].quantity = quantity
      }

      // setCart(updatedCart)  => mudar para return
      return(updatedCart)

    case "REMOVE_FROM_CART":
      const oldCart = [...cart]
      const newCart = oldCart.filter(item => item.product._id !== action.payload.id)
      return(newCart)

    case "GET_CART":
      return action.payload.products
  
    case "REVERT_CART":
      return action.payload.cart
    
   }
}


export default cartReducer