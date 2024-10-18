import "./Catalogue.css";
import CardProduct from "./CardProduct.jsx";
import { useState, useMemo } from "react";

export default function Catalogue(props) {
  const [search, setSearch] = useState("");

  const searchProducts = useMemo(() => {
    return props.allProducts.filter((product) =>
      product.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, props.allProducts]);

  function onChange(event) {
    setSearch(event.target.value);
  }

  return (
    <main>
      <div className="titleAndSearch">
        <h1>Каталог товаров</h1>
        <input
          className="search"
          type="text"
          onChange={onChange}
          placeholder="Поиск..."
          value={search}
        />
      </div>
      <div className="catalogue">
        {searchProducts.map((product) => (
          <CardProduct
            product={product}
            key={product.id}
            addToCart={props.addToCart}
            deleteFromCart={props.deleteFromCart}
            count={props.cart[product.id] ?? 0}
          />
        ))}
      </div>
    </main>
  );
}
