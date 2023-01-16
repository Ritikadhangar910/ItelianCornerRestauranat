import "./Style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = ({ productItems, handleAddProduct }) => {
  return (
    <>
      <h1 className="itemheading">Place Order Now!!</h1>
      <div className="products">
        {productItems.map((productItem) => (
          <div>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img
                variant="top"
                src={require(`../ImagesFood/${productItem.image}.jpg`)}
                alt={productItem.name}
              />
              <Card.Body>
                <Card.Title>{productItem.name}</Card.Title>
                <Card.Text>${productItem.price}</Card.Text>
                <Button
                  className="cardbtn"
                  variant="primary"
                  onClick={() => handleAddProduct(productItem)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
