import "./App.css";
import Header from "./component/header/header.component";
import AddNewCar from "./pages/add-car/add-car.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/notfound/notfound.component";
import Home from "./pages/Home/Home.page";
import CarProvider from "./component/providers/carProvider";
import CarDetails from'./pages/CarDetails/carDetails.page';
import Login from "./pages/login/login.pages";
import { SignOut } from "phosphor-react";
import Signout from "./pages/signout/signout";

function App() {
  
  return (
    <div className="App">
      <CarProvider>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path="login" element={<Login  />} />
            <Route path="home" element={<Home />} />
            <Route path="home/:id" element={<CarDetails />} />
            <Route path="/AddNewCar" element={<AddNewCar/>} />
            <Route path="*" element={<Notfound />} />
            <Route path="/Blog" />
            <Route path="/Shop" />
            <Route path="/" element={<Login/>}/>
            <Route path="/Contact" />
            <Route path="/Pages" />
            <Route path='/signout' element={<Signout />} />

          </Routes>
        </BrowserRouter>
        </CarProvider>

    </div>
  );
}
export default App;
