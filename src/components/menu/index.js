import React, { useState } from "react";
import { useEffect } from "react";
import menuapi from "../../services/menuapi";
import "./styles.scss";

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

  return (
    <>
      <p className="pizza-type">Veg Pizzas</p>
      <div className="pizza-menu">
        {veg && veg.length > 0
          ? veg.map((item, index) => {
              return (
                <div key={index} className="pizza-card">
                  <p>
                    <img
                      src={item.image}
                      height="200px"
                      width="250px"
                      alt="pizza_image"
                    />
                  </p>
                  <div>{item.name}</div>
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
                    <img
                      src={item.image}
                      height="200px"
                      width="250px"
                      alt="pizza_image"
                    />
                  </p>
                  <div>{item.name}</div>
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
                    <img
                      src={item.image}
                      height="200px"
                      width="250px"
                      alt="pizza_image"
                    />
                  </p>
                  <div>{item.name}</div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Menu;
