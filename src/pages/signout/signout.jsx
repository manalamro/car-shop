import "./signout.css";
// import signout from "../../assets/img/leaving-car.gif";
import logout from "../../assets/img/lofofpng.png"
const Signout = () => {
  return (
    <>
      <div className="signoutContainer">
        <h1 className="message">you are signed out from your account</h1>
        <img src={logout} width={500} height={300} />
        <a href="login">
          <div className="loginLink">Click here to return to the login page</div>
        </a>
      </div>
      <div>
      </div>
    </>
  );
};
export default Signout;
