import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const Cart = ({
  cardItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const navigate = useNavigate();
  const totalPrice = cardItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {cardItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>
      {cardItems.length === 0 && (
        <div className="cart-items-empty">No item is added</div>
      )}
      <div>
        {cardItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={require(`../ImagesFood/${item.image}.jpg`)}
              alt="item.name"
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price"></div>
            {item.quantity}*${item.price}
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">
          <Button
            onClick={() => {
              navigate(`/proceedtopay`);
            }}
          >
            ${totalPrice}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
