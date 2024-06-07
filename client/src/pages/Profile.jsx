import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../AuthApiServer';
import { signOut } from '../store/slices/userSlice';

export default function Profile() {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await logOut();
      dispatch(signOut());
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: Invalid session or token.');
      } else {
        console.error('Error signing out:', error);
      }
    } finally {
      localStorage.removeItem('accessToken');
      window.location.href = '/sign-in';
    }
  };

  return ( 
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form className='flex flex-col gap-4'>
        <img 
          src={currentUser.userInfo.profilePicture} 
          alt='Profile image' 
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' 
        />
        <input 
          defaultValue={currentUser.userInfo.username}
          type='text' 
          id='username' 
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3' 
        /> 
        <input 
          defaultValue={currentUser.userInfo.email}
          type='email' 
          id='email' 
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3' 
        /> 
        <input   
          type='password' 
          id='password' 
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3' 
        /> 
        <button className='bg-blue-800 text-white p-3 rounded-full uppercase hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
