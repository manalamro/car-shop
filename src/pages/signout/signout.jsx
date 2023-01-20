import "./signout.css";
import signout from "../../assets/img/leaving-car.gif";

const Signout = () => {
  return (
    <>
      <div className="z">
        <h1 className="v">You are signed out from the account</h1>
        <img src={signout} width={500} height={300} />

        <a href="login">
          <h4 className="d">Click here to return to the login page</h4>
        </a>
      </div>
      <div>
      </div>
    </>
  );
};
export default Signout;
