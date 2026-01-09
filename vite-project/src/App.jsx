import React from 'react'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import ForgotPage from './pages/ForgotPage'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<SignupPage/>}/>
      <Route path='/login' element={<SigninPage/>}/>
      <Route path='/forgot-password' element={<ForgotPage/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
