import React, { useState } from "react";
import {CarsArray} from '../../Data/data' // CarsArray Should be between curly braket '{}'.

export const CarsContext = React.createContext({});  
const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem('vsn-user'));
  return localUser || null;
}

const CarsProvider = (props) => {
  const [cars,setCars]= useState(CarsArray);
  const [user, setUser] = useState(getLoggedInUser());
  const handleUserLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('vsn-user', JSON.stringify(loggedInUser));
  }
  //function that bring and read the last data before add the new one so that
    // its will be clear that we add new post.

  const fetchCars = () => {
    const carsFromStorage = JSON.parse(localStorage.cars || '[]');
    if (carsFromStorage.length === 0) {
      localStorage.cars = JSON.stringify(CarsArray);
      setCars(CarsArray);
    } else {
      setCars(carsFromStorage);
    }
  }

  
  return (
    <CarsContext.Provider value={{user ,cars,handleUserLogin, fetchCars, setCars}}>
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;