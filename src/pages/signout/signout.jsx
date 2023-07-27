import "./signout.css";
// import signout from "../../assets/img/leaving-car.gif";
import logout from "/Users/manalamro/Desktop/rectoo/car-shop/src/assets/img/lofofpng.png"
const Signout = () => {
  return (
    <>
      <div className="signoutContainer">
        <h1 className="message">you are signed out from your account</h1>
        <img src={logout} width={500} height={300} />
        <a href="login">
          <h4 className="loginLink">Click here to return to the login page</h4>
        </a>
      </div>
      <div>
      </div>
    </>
  );
};
export default Signout;
