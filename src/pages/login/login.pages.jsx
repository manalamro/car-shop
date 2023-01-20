import './login.css'
import { useNavigate } from 'react-router-dom';
import { car_users } from '../../Data/data';
import { CarsContext } from '../../component/providers/carProvider';
import { useContext, useEffect } from 'react';
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
            <h3>Welcome Back</h3>
            <form onSubmit={handleLogin} >
                <div className='i'>
                    <label >Email</label>
                    <input type='text' name='email' required></input>
                </div>
                <div className='i'>
                    <label > Passward</label>
                    <input type="passward" name='passward' />
                </div>
                <div className='b'>
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    );
}
export default Login;
