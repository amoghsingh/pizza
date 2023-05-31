import React, { useState } from "react";
import { useEffect } from "react";
import menuapi from "../../services/menuapi";
import "./styles.scss";
import { BsCurrencyRupee } from "react-icons/bs";

const Menu = () => {
  const [veg, setVeg] = useState([]);
  const [nonveg, setNonveg] = useState([]);
  const [bev, setBev] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await menuapi.get("/pizzas");

    setVeg(response.data[0].vegPizzas);
    setNonveg(response.data[1].nonVegPizzas);
    setBev(response.data[2].beverages);
  };

  const showRatings = (ratings) => {
    let htmlStructure = "";
    let j;

    for (j = 0; j < ratings; j++) {
      htmlStructure += "<span class='fa fa-star checked'></span>";
    }

    if (j !== 5) {
      for (let i = 0; i < 5 - ratings; i++) {
        htmlStructure += "<span class='fa fa-star'></span>";
      }
    }

    return htmlStructure;
  };

  return (
    <>
      <p className="pizza-type">Veg Pizzas</p>
      <div className="pizza-menu">
        {veg && veg.length > 0
          ? veg.map((item, index) => {
              return (
                <div key={index} className="pizza-card">
                  <p>
                    <img src={item.image} alt="pizza_image" />
                    <span className="offer">20% off!</span>
                  </p>
                  <div className="pizza-details">
                    <div className="name-price">
                      <span>{item.name}</span>
                      <span className="price">
                        <BsCurrencyRupee /> {item.price}
                      </span>
                    </div>
                    <div
                      className="rating-size"
                      dangerouslySetInnerHTML={{
                        __html: showRatings(item.ratings),
                      }}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <p className="pizza-type">Non-Veg Pizzas</p>
      <div className="pizza-menu">
        {nonveg && nonveg.length > 0
          ? nonveg.map((item, index) => {
              return (
                <div key={index} className="pizza-card">
                  <p>
                    <img src={item.image} alt="pizza_image" />
                    <span className="offer">20% off!</span>
                  </p>
                  <div className="pizza-details">
                    <div className="name-price">
                      <span>{item.name}</span>
                      <span className="price">
                        <BsCurrencyRupee /> {item.price}
                      </span>
                    </div>
                    <div
                      className="rating-size"
                      dangerouslySetInnerHTML={{
                        __html: showRatings(item.ratings),
                      }}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <p className="pizza-type">Sides & Beverages</p>
      <div className="pizza-menu">
        {bev && bev.length > 0
          ? bev.map((item, index) => {
              return (
                <div key={index} className="pizza-card">
                  <p>
                    <img src={item.image} alt="pizza_image" />
                    <span className="offer">5% off!</span>
                  </p>
                  <div className="pizza-details">
                    <div className="name-price">
                      <span>{item.name}</span>
                      <span className="price">
                        <BsCurrencyRupee /> {item.price}
                      </span>
                    </div>
                    <div
                      className="rating-size"
                      dangerouslySetInnerHTML={{
                        __html: showRatings(item.ratings),
                      }}
                    />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Menu;
