import "./search.css";
import { MagnifyingGlass } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchFilter = (props) => {
  
  let [carsBrandParam, setcarsBrandParam] = useSearchParams();
  let [carsMakeParam, setcarsMakeParam] = useSearchParams();
  let [carColorParam, setcarColorParam] = useSearchParams();
  let [carYearParam, setcarYearParam] = useSearchParams();
  let [carTypeParam, setcarTypeParam] = useSearchParams();

  const carsBrandFromUrl = carsBrandParam.get("Brand") || "";
  const carsMakeFromUrl = carsMakeParam.get("Make") || "";
  const carColorFromUrl = carColorParam.get("Color") || "";
  const carYearFromUrl = carYearParam.get("Year") || "";
  const carTypeFromUrl = carTypeParam.get("Type") || "";

  const handelCarsBrandSearch = (e) => {
    const newCarsBrandParam = new URLSearchParams(carsBrandParam);
    if (e.target.value != null) {
      newCarsBrandParam.set("Brand", e.target.value);
    } else {
      newCarsBrandParam.delete("Brand");
      console.log("carsBrandParam",carsBrandParam);
    }
    setcarsBrandParam(newCarsBrandParam);
  };

  const handelCarsMakeSearch = (e) => {
    const newCarsMakeParam = new URLSearchParams(carsMakeParam);
    if (e.target.value != null) {
      newCarsMakeParam.set("Make", e.target.value);
    } else {
      newCarsMakeParam.delete("Make");
    }
    setcarsMakeParam(newCarsMakeParam);
  };

  const handelCarsColorSearch = (e) => {
    const newCarColorParam = new URLSearchParams(carColorParam);
    if (e.target.value != null) {
      newCarColorParam.set("Color", e.target.value);
    } else {
      newCarColorParam.delete("Color");
    }
    setcarColorParam(newCarColorParam);
  };

  const handelCarsYearSearch = (e) => {
    const newCarYearParam = new URLSearchParams(carYearParam);
    if (e.target.value != null) {
      newCarYearParam.set("Year", e.target.value);
    } else {
      newCarYearParam.delete("Year");
    }
    setcarYearParam(newCarYearParam);
  };

  const handelCarsTypeSearch = (e) => {
    const newCarTypeParam = new URLSearchParams(carTypeParam);
    if (e.target.value != null) {
      newCarTypeParam.set("Type", e.target.value);
    } else {
      newCarTypeParam.delete("Type");
    }
    setcarTypeParam(newCarTypeParam);
  };

  const handelSearch = () => {
    if (carsBrandFromUrl !== "" || carsMakeFromUrl !== "" || carColorFromUrl !== "" ||carTypeFromUrl !== "" ||carYearFromUrl !== "") {
      let isMatching = false;
      let filterdCarFromSearchQuery = props.cars.filter((car) => {
        isMatching =
          car.Brand === carsBrandFromUrl ||
          car.Make === carsMakeFromUrl ||
          car.color === carColorFromUrl ||
          car.CarType === carTypeFromUrl ||
          car.year == carYearFromUrl;
        return isMatching;
      });

      localStorage.setItem(
        "filterdCarFromSearchQuery",
        JSON.stringify(filterdCarFromSearchQuery)
      );
      props.setFilterdCars(filterdCarFromSearchQuery);
    } 

     
  };


useEffect(()=>{
  if
  (carsBrandFromUrl === ""  &&  carsMakeFromUrl === "" 
  && carColorFromUrl === "" && carTypeFromUrl === "" 
  && carYearFromUrl === "")
  {
    props.setFilterdCars(props.cars);  
  }

},[props.cars,setcarsBrandParam,setcarsMakeParam,setcarColorParam,setcarYearParam,setcarTypeParam])


  return (
    <>
      <h2>WELCOME TO CAR CMART</h2>
      <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit?
      </p>
      <div className="searchContainer">
        <select
          name="cars-brand"
          value={carsBrandFromUrl}
          onChange={handelCarsBrandSearch}
          required
        >
          <option value=" ">Select Brand</option>
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

        <select
          name="cars_make"
          value={carsMakeFromUrl}
          onChange={handelCarsMakeSearch}
          required
        >
          <option value="">Select Make</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Toyota">Toyota</option>
          <option value="Lamborghini">Lamborghini</option>
        </select>
        <select
          name="cars_color"
          value={carColorFromUrl}
          onChange={handelCarsColorSearch}
          required
        >
          <option value="">Select Color</option>
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="orange">orange</option>
          <option value="black">black</option>
        </select>
        <select
          name="cars_year"
          value={carYearFromUrl}
          onChange={handelCarsYearSearch}
          required
        >
          <option value="">Select Year</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select
          name="cars_type"
          value={carTypeFromUrl}
          onChange={handelCarsTypeSearch}
          required
        >
          <option value="">Select Type Of Car</option>
          <option value="sedan">sedan</option>
          <option value="Universal">Universal</option>
          <option value="CUV">CUV</option>
          <option value="Roadster">Roadster</option>
          <option value="sport">sport</option>
        </select>
        <button className="buttonStyle" type="submit" onClick={handelSearch} >
          <MagnifyingGlass size={15} color="#f8f7f7" weight="bold" />
          Find
        </button>
      </div>
    </>
  );
};

export default SearchFilter;
