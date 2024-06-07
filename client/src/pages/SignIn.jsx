import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { signIn } from "../AuthApiServer";
import { signInStart, signInSuccess, signInFailed } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });
  const { isLoading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = e => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInStart());
    try {
      const userData = await signIn(signInForm);
      dispatch(signInSuccess(userData))
      navigate('/profile')
    } catch {
      let errorMessage;
      if (error.response && error.response.data) { 
        errorMessage = error.response.data.error || "Sign-in failed. Please check your credentials.";
      } else {
        errorMessage = error || "An error occurred during sign-in.";
      }
      dispatch(signInFailed(errorMessage));
    }

    setSignInForm({
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
        <input 
          type="text" 
          placeholder="email" 
          name="email" 
          value={signInForm.email}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          required
          />
        <input 
          type="password" 
          placeholder="password" 
          name="password" 
          value={signInForm.password}
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
      <p className="text-red-700 mt-5"> {error ? error  || 'something went wrong' : ''} </p>

    </div>
  )
}
