import { useState } from "react";
import Form from "react-bootstrap/Form";
import StripeCheckout from "react-stripe-checkout";
const Proceedpay = ({ cardItems }) => {
  const [amount, setAmount] = useState(0);
  const totalPrice = cardItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handleToken = (token) => {
    fetch("/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  return (
    <>
      <Form className="myForm mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your payment</Form.Label>
          <Form.Control
            type="text"
            defaultValue={totalPrice}
            id="outlined-adornment-amount"
            value={totalPrice}
            onChange={handleAmountChange}
          />
        </Form.Group>
      </Form>
      <StripeCheckout
        style={{ width: "225px" }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
        token={handleToken}
        name=""
        panelLabel={`Donate`}
        currency="USD"
        amount={amount * 100}
      ></StripeCheckout>
    </>
  );
};
export default Proceedpay;
