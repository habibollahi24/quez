// import PropTypes from "prop-types";

function Cart({ cart }) {
  return (
    <div className="cart">
      <p>name: {cart.name}</p>
      <p>description: {cart.description}</p>
      <p>category: {cart.category}</p>
      <p>quantity: {cart.quantity}</p>
      <p>price: {cart.price}</p>
    </div>
  );
}

Cart.propTypes = {
  cart: {},
};

export default Cart;
