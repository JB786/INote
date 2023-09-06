import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp(props) {


  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })

  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const {name,email,password,cpassword} = credentials;

    // API Call
    const response = await fetch(`http://127.0.0.1:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name,email,password,cpassword})
    });

    const json = await response.json();
    console.log(json);
    if(password === credentials.cpassword){

      if (json.success) {
        // save the auth-token and redirect
        localStorage.setItem("token", json.authtoken)
        navigate("/");
        props.showAlert("Account Created Successfully. You are logged in now.", "success");
      }
      else {
        props.showAlert("Please, Fill the fields carefully!", "danger");
      }
    }
    else{
      props.showAlert("Confirm Password doesn't match! Enter Correctly.", "warning");
    }
  }

  const onChange = (events) => {
    setCredentials({ ...credentials, [events.target.name]: events.target.value })
  }


  return (
    <div className='my-4'>
      <form onSubmit={ handleSignup }>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input type="text" className="form-control" onChange={onChange} value={credentials.name} id="name" name='name' autoComplete='new-name' minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name='email' autoComplete='new-email' aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name='password' autoComplete='new-password' minLength={8} maxLength={16} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={onChange} value={credentials.cpassword} id="cpassword" name='cpassword' autoComplete='new-password' minLength={8} maxLength={16} required />
        </div>
        <button type="submit" className="btn btn-dark">Create Account ˃</button>
      </form>
    </div>
  )
}

export default SignUp
