import "./Header.css";
import buttonToCart from "../images/ButtonToCart.png";

export default function Header(props) {
  return (
    <header className="header">
      <p className="title">Мороженое</p>
      <div className="infoCart">
        {!props.isLoading && (
          <p>
            Количество: {props.productCount} <br />
            Сумма: {props.productSum}
          </p>
        )}
        <img
          src={buttonToCart}
          alt="Error"
          width="35px"
          height="35px"
          title="Перейти в корзину"
          className="buttonToCart"
        ></img>
      </div>
    </header>
  );
}
