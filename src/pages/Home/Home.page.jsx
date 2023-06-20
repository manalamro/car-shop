import React from "react";
import logo from "../../assets/img/Aventador.jpg";
import Items from "../../component/Items/items.component";
import "./home.css";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../component/providers/carProvider";
import SearchFilter from "../../component/searchFilter/search.conponent";
const Home = () => {
  const { fetchCars, cars } = useContext(CarsContext);
  const [filterdCars, setFilterdCars] = React.useState(cars);
  console.log("filterdCars : " + filterdCars);
   
  // useEffect for read data from localStorage

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <div>
        <img src={logo} alt="f" className="imgStyle" width={20} />
        <SearchFilter cars={cars} setFilterdCars={setFilterdCars} />
        <h1 className="secondText">Featured Cars</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        {<Items filterdCars={filterdCars} />}
      </div>
    </>
  );
};
export default Home;
