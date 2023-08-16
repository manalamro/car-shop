import { useState} from "react";
import "./header.css";
import { PlusCircle, MagnifyingGlass, SignOut, List, X } from "phosphor-react";
import useScreenWidth from '../providers/screenWidth.provider'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const width = useScreenWidth();
  const [toggleMenu, settoggleMenu] = useState(false);

  const toggleNav = () => {
    settoggleMenu(!toggleMenu);
  };


  return (
    <>

      <div className="header">
        <h1> CMART</h1>
        { width > 460 ? (
           <>
 <div className="nav">
            <a href="/home">Home</a>
            <a href="/Contact">Contact</a>
            <a href="/AddNewCar">
              <PlusCircle size={25} />
            </a>
            <a href="/signout">
              <SignOut size={25} />
            </a>

   </div>
 </>
        ):(
        
          <>
            <div className={toggleMenu ? "nav" :"nav nav_active"}>
            <a href="/home" onClick={toggleNav}>Home</a>
            <a href="/Contact"onClick={toggleNav}>Contact</a>
            <a href="/AddNewCar"onClick={toggleNav}>
              <PlusCircle size={25} />
            </a>
            <a href="/signout"onClick={toggleNav}>
              <SignOut size={25} />
            </a>
        </div>
        </>
        )
      }
        
        <button onClick={toggleNav}>   
        {}        
           <List size={25} color="#ff1f4b" weight="bold" />
        </button>
      </div>
    </>
  );
};
export default Header;
