import { Link } from "react-router-dom"
import { useState } from "react";
import { signIn } from "../ApiServer";


export default function SignIn() {
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
    signIn(signUpForm);
    setIsLoading(false);
    setSignUpForm({
        username: '',
        email: '',
        password: ''
    })
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Sign In </h1>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 "
        >
        {/* <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          value={signUpForm.username}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          required
          /> */}
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
            {isLoading ? 'Creating' : 'SIGN IN'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>{`Don't have an account?`}</p>
        <Link to={'/sign-up'}>
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  )
}
