import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import PrivateComp from "./Components/PrivateComp";
import MyNavbar from "./Components/MyNavbar";
import Home from "./Components/Home";
import Data from "./Components/Data";
import Cart from "./Components/Cart";
import { useState } from "react";
import Proceedpay from "./Components/Proceedpay";
function App() {
  const { productItems } = Data;
  const [cardItems, setCardItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cardItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cardItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCardItems(cardItems.filter((item) => item.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearance = () => {
    setCardItems([]);
  };
  return (
    <>
      <BrowserRouter>
        <MyNavbar cardItems={cardItems} />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route
              path="/proceedtopay"
              element={<Proceedpay cardItems={cardItems} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cardItems={cardItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home
                  handleAddProduct={handleAddProduct}
                  productItems={productItems}
                />
              }
            />
          </Route>
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
