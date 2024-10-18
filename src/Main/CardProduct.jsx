import "./CardProduct.css";
import buttonAddToCart from "../images/ButtonAddToCart.png";
import buttonDeleteFromCart from "../images/ButtonDeleteFromCart.png";

export default function CardProduct(props) {
  return (
    <div className="product">
      <img
        width="350px"
        height="350px"
        src={props.product.image}
        alt="Error"
      ></img>
      <p>{props.product.title}</p>
      <p>Цена: {props.product.cost}</p>
      <div className="buttons">
        <img
          className="buttonDeleteFromCart"
          title="Удалить из корзины"
          width="35px"
          height="35px"
          src={buttonDeleteFromCart}
          alt="Error"
          onClick={() => props.deleteFromCart(props.product)}
        ></img>
        <h2>{props.count}</h2>
        <img
          className="buttonAddToCart"
          title="Добавить в корзину"
          width="35px"
          height="35px"
          src={buttonAddToCart}
          alt="Error"
          onClick={() => props.addToCart(props.product)}
        ></img>
      </div>
    </div>
  );
}
