import { useState } from "react";
import formImg from "../../assets/img/car-background.jpeg";
import { useContext } from "react";
import "./new-item.css";
import { CarsContext } from "../providers/carProvider";
const New_item = (props) => {
  const { user } = useContext(CarsContext);
  const [cars_transmission, setCarstransmission] = useState();
  const [cars_EngineFuel, setCarsEngineFuel] = useState();
  const [CarType, setCarType] = useState();
  const [cars_brand, setCarsbrand] = useState();
  const [Car_status, setCarsStatus] = useState();


  return (
    <div className="container">
      <h2>Add Car Form</h2>
      <img className="formImg" src={formImg} alt="formImg"></img>
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="column-item">
          <label>Car Color</label>
          <input type="text" name="car_color" required />

          <label>Car status</label>
          <select
            name="Car_status"
            value={Car_status}
            onChange={(e) => setCarsStatus(e.target.value)} required
          >
            <option value="For Sale">For Sale</option>
            <option value="Not For Sale">Not For Sale</option>
          
          </select>

          <label>Car Brand</label>
          <select
            name="cars_brand"
            value={cars_brand}
            onChange={(e) => setCarsbrand(e.target.value)} required
          >
            <option value="Golf Cabriolet">Golf Cabriolet</option>
            <option value="Beetle">Beetle</option>
            <option value="Arteon">Arteon</option>
            <option value="Shooting Brake">Shooting Brake</option>
            <option value="Volkswagen CC">Volkswagen CC</option>
            <option value="BMW-i8">BMW-i8</option>
            <option value="G-class">G-class</option>
            <option value="Avalon Hybrid">Avalon Hybrid</option>
            <option value="Aventador">Aventador</option>
          </select>

          <label>PayPerMonth</label>
          <input type="text" name="PayPerMonth" required />
          <label>Car Odometer</label>
          <input type="text" name="car_meter" required />
          <label>Car year</label>
          <input type="number" name="car_year" required />
          <label>Car Make</label>
          <input type="text" name="car_Make" required />
          <label>Car Image</label>
          <input type="text" name="imgURL" required />
        </div>
        <div className="column-item">
          <label>Car transmission</label>
          <select
            name="cars_transmission"
            value={cars_transmission}
            onChange={(e) => setCarstransmission(e.target.value)}
            required
          >
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
          
          <label>Car EngineFuel</label>
          <select
            name="cars_EngineFuel"
            value={cars_EngineFuel}
            onChange={(e) => setCarsEngineFuel(e.target.value)}
            required
          >
            <option value="Diesel">Diesel</option>
            <option value="petrol">petrol</option>
          </select>
          <label>Car CarType</label>
          <select
            name="CarType"
            value={CarType}
            onChange={(e) => setCarType(e.target)}
            required
          >
            <option value="sedan">sedan</option>
            <option value="Universal">Universal</option>
            <option value="CUV">CUV</option>
            <option value="Roadster">Roadster</option>
            <option value="sport">sport</option>
          </select>
        </div>
        <div className="button-style">
          <button
            className="submit"
            type="submit"
            disabled={user.role === "user"}
          >
            Add
          </button>
          <button className="reset" type="reset">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default New_item;
