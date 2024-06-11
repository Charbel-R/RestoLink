import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute";
import Favorites from "./pages/Favorites"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
