import React,{useContext} from 'react';
import './add-car.css';
import New_item from '../../component/new-item/new-item.component'
import { CarsContext } from '../../component/providers/carProvider';
import { useNavigate } from 'react-router-dom';


const AddNewCar = () => {
const navigate = useNavigate();
const{fetchCars} =useContext(CarsContext);
//function to handel the added post.
 
const handleSubmit = (e) => {
    e.preventDefault();
    //to read and get the enterd data.
    //store the value in variable by get the value of spicific item.
    const id =Date.now();
    const Brand = e.target.cars_brand.value;
    const Make = e.target.car_Make.value;
    const payPerMonth = e.target.PayPerMonth.value;
    const transmission = e.target.cars_transmission.value;
    const year = e.target.car_year.value;
    const EngineFuel = e.target.cars_EngineFuel.value;
    const CarType = e.target.CarType.value;
    const color = e.target.car_color.value;
    const img = e.target.imgURL.value;
    const carMetet = e.target.car_meter.value;
    const status = e.target.Car_status.value;
    const newCar = {
      id:id,
      Brand: Brand,
      Make:Make,
      payPerMonth:payPerMonth ,
      transmission:transmission ,
      year:year,
      EngineFuel:EngineFuel,
      CarType:CarType ,
      color:color ,
      img:img,
      carMetet:carMetet,
      status:status
    };
  
    //before add the new value we read the localStoage.
    const carsFromStorage = JSON.parse(localStorage.cars || '[]');
    //add the new value and the previous array into new array.
    const newCars = [newCar, ...carsFromStorage];
    //add the new array into the localStorage.
    localStorage.cars = JSON.stringify(newCars);
    fetchCars();
    alert('Your car added successfully!');
    e.target.reset();
    navigate('/home');
  }
  



    return (
        <New_item handleSubmit={handleSubmit}/>
    )
    navigate('/home');

}
export default AddNewCar;