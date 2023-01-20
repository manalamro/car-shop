import { useContext } from "react";
import { CarsContext } from "../../component/providers/carProvider";
import "./carDetails.css";
import useSpicificCar from "../../Hooks/carDetail.hook";
const CarDetails = () => {
  const { cars } = useContext(CarsContext);

  const [car] = useSpicificCar(cars);
  return (
    <div>
      {car !== null ? (
        <div className="DetailsContainer">
          <div>
            <img className="carImage" src={car.img} alt="carImage" />
          </div>
          <div className="Brand">
            <h1>{car.Brand}</h1>
          </div>

          <hr />

          <div className="item-in-column">
            <div className="items-in-row itemsContainer ">
              <h3 className="title">car Meter</h3>
              <h3 className="value">{car.carMetet}</h3>
            </div>

            <div className="items-in-row itemsContainer">
              <h3 className="title">car transmission</h3>
              <h3 className="value"> {car.transmission}</h3>
            </div>

            <div className="items-in-row itemsContainer">
              <h3 className="title">year</h3>
              <h3 className="value">{car.year}</h3>
            </div>

            <div className="items-in-row itemsContainer">
              <h3 className="title">EngineFuel</h3>
              <h3 className="value"> {car.EngineFuel}</h3>
            </div>

            <div className="items-in-row itemsContainer">
              <h3 className="title">CarType</h3>
              <h3 className="value">{car.CarType}</h3>
            </div>

            <div className="items-in-row itemsContainer">
              <h3 className="title">Color</h3>
              <h3 className="value"> {car.color}</h3>
            </div>
          </div>
        </div>
      ) : (
        <h2>Car Not found</h2>
      )}
    </div>
  );
};

export default CarDetails;
