
import './header.css'
import {PlusCircle,MagnifyingGlass,SignOut  } from 'phosphor-react'

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1> CMART</h1>  
                    <div className="linkes">
                    <a href='/home'><h3>Home </h3></a>
                    <a href="/pages" ><h3>Pages</h3></a>
                    <a href="/Blog" ><h3>Blog</h3></a>
                    <a href="/Shop" ><h3>Shop</h3></a>
                    <a href="/Contact" ><h3>Contact</h3></a>
                  
                    <div className='icons'>
                    <a href="/AddNewCar" > <PlusCircle size={25} /></a>
                    <a href="/signout" >  <SignOut size={25} /></a>
                    </div>
            
                </div>
            </div>
        </div>
    );
}
export default Header;