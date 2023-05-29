import React, { lazy } from "react";
import "./styles.scss";
import { Suspense } from "react";
import loader from "../../assets/loader.gif";
const Menu = lazy(() => import("../menu"));

const Home = () => {
  return (
    <>
      <h3>Enjoy Lip Smacking Delicious Pizaas!</h3>
      <Suspense
        fallback={
          <div className="loader">
            <img src={loader} width="80px" height="80px" alt="Loading..." />
          </div>
        }
      >
        <Menu />
      </Suspense>
    </>
  );
};

export default Home;
