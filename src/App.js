import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function updateCart(item) {
    setCart([...cart, item]);
    setTotal(total+ item.price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} updateCart={updateCart}/>
      ))}

      <div>
        <h1>Cart</h1>
        <h2>Total: ${total}</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((item, index) => (
          <div>Name: {item.name}, Price: ${item.price}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
