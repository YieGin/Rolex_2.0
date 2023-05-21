import React, { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../../redux/cartSlice";
import "./styles/cart.css";
const CartPage = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, totalPrice } = useSelector((state) => state.AllCart);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div id={props.theme} className="Open_cart">
      <div className="Cart_1">
        <h1 className="selection_text">
          {t("Cartt.page2.selection")}{" "}
          <span className="text-green-600">{cart.length}</span>
        </h1>
      </div>
      <div className="Total_price">
        <h1 className="selection_text">
          {t("Cartt.page2.quantity")}{" "}
          <span className="text-green-600">{cart.length}</span>
        </h1>
        <h1 className="selection_text">
          {t("Cartt.page2.amount")}
          <span className="text-green-600"> {totalPrice}$</span>
        </h1>
      </div>

      <div className="Main_cards2">
        {cart.map((data) => (
          <div className="cards">
            <svg
              className="Remove_cart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={() => dispatch(removeItem(data.id))}
            >
              <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
            <div className="card">
              <div className="image-container">
                <img src={data.img} alt="ashley" />
              </div>
              <div className="card-footer">
                <p>{data.name}</p>
                <p className="text-[12px] phone:text-[15px]">{data.title}</p>
                <a className="read-more">{data.price}$</a>
                <p className="read-more">
                  YOU HAVE {data.quantity} {t("Cartt.page2.have")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
