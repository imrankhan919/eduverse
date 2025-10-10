import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
