import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  let data = { name, mobile, address };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);
  const getvalue = async () => {
    setname("");
    setmobile("");
    setaddress("");
    let result = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    if (result) {
      navigate("/");
    }
  };
  return (
    <>
      <h2 className="SignUpheading">Register</h2>
      <Form className="myForm">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label className="">Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mobile"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your contact details with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" onClick={getvalue}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default SignUp;
