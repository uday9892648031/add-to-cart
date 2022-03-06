import React, { useState } from "react";
import "./App.css";

export default function App() {
  const PAGE_PRODUCTS = "products";
  const PAGE_CART = "cart";

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: "AA Battery",
      cost: "$2.99",
      image:
        "https://www.bigbasket.com/media/uploads/p/l/100028198_5-duracell-ultra-alkaline-battery-aa.jpg",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://www.bigbasket.com/media/uploads/p/l/100028198_5-duracell-ultra-alkaline-battery-aa.jpg",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://www.bigbasket.com/media/uploads/p/l/100028198_5-duracell-ultra-alkaline-battery-aa.jpg",
    },
    {
      name: "Blanket",
      cost: "$19.99",
      image:
        "https://www.bigbasket.com/media/uploads/p/l/100028198_5-duracell-ultra-alkaline-battery-aa.jpg",
    },
  ]);
  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product)=> product !== productToRemove)
    );
  };
  const navigateTo = (nextpage) => {
    setPage(nextpage);
  };
  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div>&nbsp;</div>
      <div className="products">
        {products.map((product, id) => (
          <div key={id}>
            <div>{product.name}</div>
            <div>{product.cost}</div>
            <div>
              <img src={product.image} alt="image" />
            </div>
            <div>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div>&nbsp;</div>
      <div className="products">
        {cart.map((product, id) => (
          <div key={id}>
            <div>{product.name}</div>
            <div>{product.cost}</div>
            <div>
              <img src={product.image} alt="image" />
            </div>
            <div><button onClick={() => removeFromCart(product)}>Remove from cart</button></div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>&nbsp;
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
        View Products
        </button>
      </header>
      
      {page == PAGE_PRODUCTS && renderProducts()}
      {page == PAGE_CART && renderCart()}
    </div>
  );
}
