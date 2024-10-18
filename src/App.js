import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Catalogue from "./Main/Catalogue";
import Header from "./Header/Header";

const LOCAL_STORAGE_KEY = "cart";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const value = localStorage.getItem(LOCAL_STORAGE_KEY);
      setCart(value ? JSON.parse(value) : {});
    } catch {
      console.log("Error: LocalStorage.getItem");
    }
    setLoading(true);

    fetch("https://webapi.omoloko.ru/api/v1/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((json) => {
        setAllProducts(json.products.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const productCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  const productSum = useMemo(() => {
    return Object.entries(cart).reduce((total, [productId, productCount]) => {
      const productPrice = allProducts?.find(
        (product) => productId === product.id
      )?.cost;
      return total + productCount * productPrice;
    }, 0);
  }, [allProducts, cart]);

  function AddToCart(product) {
    const updatedCart = { ...cart };
    updatedCart[product.id] = (updatedCart[product.id] ?? 0) + 1;
    setCart(updatedCart);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));
    } catch {
      console.log("Error: function AddToCart, localStorage.setItem");
    }
  }

  function DeleteFromCart(product) {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id] === 1
        ? delete updatedCart[product.id]
        : (updatedCart[product.id] = updatedCart[product.id] - 1);
      setCart(updatedCart);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));
      } catch {
        console.log("Error: function DeleteFromCart, localStorage.setItem");
      }
    }
  }

  return (
    <div className="app">
      <Header
        productCount={productCount}
        productSum={productSum}
        isLoading={loading}
      />
      {loading ? (
        <main className="main">
          <h2 className="loading">Loading...</h2>
        </main>
      ) : (
        <Catalogue
          addToCart={AddToCart}
          deleteFromCart={DeleteFromCart}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          cart={cart}
        />
      )}
      <footer className="footer">
        <h3>
          Автор: Девяткина Светлана Сергеевна
          <br />
          Телефон: +7-(985)-847-27-49 <br />
          email: sveta.devyakina.99@mail.ru <br />
        </h3>
      </footer>
    </div>
  );
}

export default App;
