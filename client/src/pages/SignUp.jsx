import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { signUp } from "../AuthApiServer.js";


export default function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
    gender:'',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      setError(false);
      await signUp(signUpForm);
      setIsLoading(false);
      navigate('/sign-in')
    } catch (error) {
      setIsLoading(false);
      setError(true)
    }

    setSignUpForm({
        username: '',
        email: '',
        password: '',
        gender: '',
    })
  }

  return (
    <main className="bg-blue-50 h-screen">
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
            className="bg-white p-3 rounded-lg"
            onChange={handleChange}
            required
            />
          <input 
            type="text" 
            placeholder="email" 
            name="email" 
            value={signUpForm.email}
            className="bg-white p-3 rounded-lg"
            onChange={handleChange}
            required
            />
          <input 
            type="password" 
            placeholder="password" 
            name="password" 
            value={signUpForm.password}
            className="bg-white p-3 rounded-lg"
            onChange={handleChange}
            required
          />
        
          <select
            id="gender"
            name="gender"
            value={signUpForm.gender}
            onChange={handleChange}
            className="bg-white text-blue-500 p-2 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="male">Other</option>
            {/* Add more options as needed */}
          </select>
        
          <button 
            disabled={isLoading} 
            className="bg-blue-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
              {isLoading ? 'Creating... ' : 'SIGN UP'}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={'/sign-in'}>
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5"> {error && 'something went wrong'} </p>
      </div>
    </main>
  )
}
