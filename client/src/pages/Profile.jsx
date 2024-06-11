import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { logOut } from '../AuthApiServer';
import { signOut, updateUser } from '../store/slices/userSlice';
import { resetFavorites } from '../store/slices/supplierSlice';

const baseUrl = 'http://localhost:3000';

export default function Profile() {
  const { currentUser } = useSelector(state => state.user);
  const { token } = useSelector(state => state.user);
  
  const accessToken = token;
  const dispatch = useDispatch();

  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [gender, setGender] = useState(currentUser.gender);

  // const [password, setPassword] = useState('');

  const handleEditUser = async (e) => {
    e.preventDefault(); 

    const updatedUserData = {
      username,
      email,
      // password, // Include password if needed,
      gender,
    };

    try {
      if (!accessToken) {
        throw new Error('Missing access token'); // Handle missing token
      }
      // Update user information on the backend (replace with your actual API call)
      const response = await fetch(`${baseUrl}/auth/user/edit/${currentUser._id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: ` ${accessToken}`, 
        },
        body: JSON.stringify(updatedUserData),
      });
      const updatedData = await response.json();
      if (!response.ok) {
        throw new Error(updatedData.error || 'Update failed');
      }

      dispatch(updateUser(updatedData)); // Dispatch with updated data

      toast.success('Your profile information has been updated successfully!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'profileUpdate', // Optional: For unique toast handling
      });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      dispatch(signOut());
      dispatch(resetFavorites())

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
 
  const handleDeleteUser = async () => {
    try {
      // Delete user on the backend (replace with your actual API call)
      const response = await fetch(`${baseUrl}/auth/user/delete/${currentUser._id}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: ` ${accessToken}`, 
        
        },
      }
    );

      if (!response.ok) {
        throw new Error(await response.text() || 'Delete failed');
      }

      dispatch(signOut()); // Dispatch sign out after successful deletion
      localStorage.removeItem('accessToken');
      window.location.href = '/sign-in'; // Redirect to sign-in

    } catch (error) {
      console.error('Error deleting user:', error);
    } 
  };

  return (
    <div className=' bg-blue-50 h-screen' >
      <div className='p-3 max-w-lg mx-auto '>
        <h1 className='text-3xl font-semibold text-center my-7'>
          Profile
        </h1>
        <form className='flex flex-col gap-4' onSubmit={handleEditUser}>
          <img
            src={currentUser.profilePicture}
            alt='Profile image'
            className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          />
          <input
            defaultValue={username}
            type='text'
            id='username'
            placeholder='Username'
            className='bg-white rounded-lg p-3'
            onChange={(e) => setUsername(e.target.value)} // Update username state on change
          />
          <input
            defaultValue={email}
            type='email'
            id='email'
            placeholder='Email'
            className='bg-white rounded-lg p-3'
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
          />
          {/* <input
            type='password'
            id='password'
            placeholder='Password (optional)' // Optional
            className='bg-slate-100 rounded-lg p-3'
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
          /> */}
          <select
            id="gender"
            name="gender"
            defaultValue={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-white text-blue-500 p-2 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="male">Other</option>
            {/* Add more options as needed */}
          </select>
          <button type='submit' className='bg-blue-800 text-white p-3 rounded-full uppercase hover:opacity-95 disabled:opacity-80'>
            Update
          </button>
        </form>
        
        <div className='flex justify-between mt-5'>
          <span onClick={handleDeleteUser} className='text-red-700 cursor-pointer'>Delete Account</span>
          <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
            Sign out
          </span>
        </div>
        {/* Import ToastContainer at the end */}
        <ToastContainer />
      </div>
    </div>
  );
}