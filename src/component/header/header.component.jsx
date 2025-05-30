import { useState} from "react";
import "./header.css";
import { PlusCircle, MagnifyingGlass, SignOut, List, X } from "phosphor-react";
import useScreenWidth from '../providers/screenWidth.provider'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const width = useScreenWidth();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };


  return (
    <>

      <div className="header">
        <h1> CMART</h1>
        { width > 460 ? (
           <>
 <div className="nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/AddNewCar">
              <PlusCircle size={25} />
            </NavLink>
            <NavLink to="/signout">
              <SignOut size={25} />
            </NavLink>

   </div>
 </>
        ):(
        
          <>
            <div className={toggleMenu ? "nav nav_active" : "nav"}>
            <NavLink to="/home" onClick={toggleNav}>Home</NavLink>
            <NavLink to="/Contact" onClick={toggleNav}>Contact</NavLink>
            <NavLink to="/AddNewCar" onClick={toggleNav}>
              <PlusCircle size={25} />
            </NavLink>
            <NavLink to="/signout" onClick={toggleNav}>
              <SignOut size={25} />
            </NavLink>
        </div>
        </>
        )
      }
        
        <button onClick={toggleNav}>   
        {toggleMenu ? (
          <X size={25} color="#ff1f4b" weight="bold" />
        ) : (
          <List size={25} color="#ff1f4b" weight="bold" />
        )}        
        </button>
      </div>
    </>
  );
};
export default Header;
