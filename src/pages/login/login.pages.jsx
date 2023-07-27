import './login.css'
import { useNavigate } from 'react-router-dom';
import { car_users } from '../../Data/data';
import { CarsContext } from '../../component/providers/carProvider';
import { useContext, useEffect } from 'react';
// import loginimg from "/Users/manalamro/Desktop/rectoo/car_shop.manal.and.zainab/src/assets/img/car-background.jpeg"
const Login = () => { 
    const navigate = useNavigate();
    const { handleUserLogin, user } = useContext(CarsContext);
    useEffect(() => {
      if (user !== null) {
        //navigate('/home');
      }
    }, [user]);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passward = e.target.passward.value;
    const user = car_users.find((user) => user.email === email && user.passward === passward);

    if (user) {
      handleUserLogin(user);
      navigate('/home', { replace: true });
    } else {
      alert("I don't know you, Go Away");
    }
  }

    return (
        <div className='login'>
            <form onSubmit={handleLogin} >
              <h1>Welcome back!</h1>
                <div className='i'>
                    <label >Email</label>
                    <input type='text' name='email' required></input>
                    <label > Passward</label>
                    <input type="passward" name='passward' />
                </div>
                <button type="submit" >Login</button>
                <div >
                </div>
            </form>
            {/* <div className='vl'></div> */}
        </div>
    );
}
export default Login;
