import React from 'react'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<SignupPage/>}/>
      <Route path='/login' element={<SigninPage/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
