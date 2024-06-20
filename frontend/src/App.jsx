import Header from "./components/Header"
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
// import  Dashboard  from "./pages/Dashboard"
import AddTravel  from "./pages/AddTravel"
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/add" element={<AddTravel />} />
      </Routes>
    </>
  )
}

export default App
