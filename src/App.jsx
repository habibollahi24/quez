import { useEffect, useState } from "react";
import { validation } from "./validation";
import { toast } from "react-toastify";

function App() {
  const [cart, setCart] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({});
  const [statusButton, setStatusButton] = useState("Cancel");

  useEffect(() => {
    setErrors(validation(formData));
  }, [formData]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const blurHandler = (e) => {
    setShow({ [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ errors });

    if (Object.keys(errors).length === 0) {
      toast.success("The form has been submitted successfully");
      setCart({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        quantity: formData.quantity,
        price: formData.price,
      });
      setFormData({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
      });
      setShow({
        name: false,
        description: false,
        category: false,
        quantity: false,
        price: false,
      });
      setStatusButton("Clear");
    } else {
      setShow({
        name: true,
        description: true,
        category: true,
        quantity: true,
        price: true,
      });
    }
  };

  const resetHandler = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
    setCart({});
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "3rem" }}>New Product</h1>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            className="input"
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {show.name && errors.nameValid && (
            <p className="error">{errors.nameValid}</p>
          )}
        </div>
        <div>
          <input
            className="input"
            name="description"
            placeholder="Description"
            type="text"
            value={formData.description}
            onChange={changeHandler}
            onBlur={blurHandler}
          />{" "}
          {show.description && errors.descriptionValid && (
            <p className="error">{errors.descriptionValid}</p>
          )}
        </div>
        <div>
          {" "}
          <input
            className="input"
            name="category"
            placeholder="Category"
            type="text"
            value={formData.category}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {show.category && errors.categoryValid && (
            <p className="error">{errors.categoryValid}</p>
          )}
        </div>
        <div>
          <input
            className="input"
            name="quantity"
            placeholder="Quantity"
            type="text"
            value={formData.quantity}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {show.quantity && errors.quantityValid && (
            <p className="error">{errors.quantityValid}</p>
          )}
        </div>
        <div>
          {" "}
          <input
            className="input"
            name="price"
            placeholder="Price"
            type="text"
            value={formData.price}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {show.price && errors.priceValid && (
            <p className="error">{errors.priceValid}</p>
          )}
        </div>

        <div className="btns">
          <button className="primary" type="submit">
            Submit
          </button>
          <button className="secondary" type="reset" onClick={resetHandler}>
            {statusButton}
          </button>
        </div>
      </form>
      {Object.keys(cart).length !== 0 && (
        <div className="cart">
          <p>name: {cart.name}</p>
          <p>description: {cart.description}</p>
          <p>category: {cart.category}</p>
          <p>quantity: {cart.quantity}</p>
          <p>price: {cart.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
