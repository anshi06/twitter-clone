import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  "./Login.css";
import profile from "../Images/a.png";
const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const history = useNavigate();
  // Uppercase (A-Z) and lowercase (a-z) English letters.
  // Digits (0-9).
  // Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
  // Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.match(mailformat);
  const EmailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
  const enteredPasswordIsValid = enteredPassword.match(passw);
  const PasswordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }
  const passwordInputChangeHandler = (event) =>{
    setEnteredPassword(event.target.value);
  }
  const passwordInputBlurHandler = (event) =>{
    setEnteredPasswordTouched(true);
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("Submitted!!")
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredPassword('');
    setEnteredPasswordTouched(false);
    history("/home");
  }
  return (
    <div className="main" >
      <div className='sub-main'>
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <form>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="Email" className="name"  onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}  value={enteredEmail}/>
              {EmailInputIsInvalid && <div className="danger">* Enter valid Email</div>}
            </div>
            <div className="second-input">
              <input type="text" placeholder="Password" className="name"  onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}  value={enteredPassword}/>
             { PasswordInputIsInvalid && <div className="danger">* Password must contain atleast one UpperCase, Number and a special character</div>}
            </div>
            <div className="login-button">
             
              <button disabled={!formIsValid} onClick={formSubmissionHandler} id="btn">Login</button>
             
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;