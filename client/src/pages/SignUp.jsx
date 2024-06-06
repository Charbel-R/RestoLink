import { Link } from "react-router-dom"
import { useState } from "react";
import { addUser } from "../ApiServer.js";


export default function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = e => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    addUser(signUpForm);
    setIsLoading(false);
    setSignUpForm({
        username: '',
        email: '',
        password: ''
    })
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Register </h1>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 "
        >
        <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          value={signUpForm.username}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          required
          />
        <input 
          type="text" 
          placeholder="email" 
          name="email" 
          value={signUpForm.email}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          required
          />
        <input 
          type="password" 
          placeholder="password" 
          name="password" 
          value={signUpForm.password}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          required
          />
        <button 
          disabled={isLoading} 
          className="bg-blue-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-60">
            {isLoading ? 'Creating' : 'SIGN UP'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
