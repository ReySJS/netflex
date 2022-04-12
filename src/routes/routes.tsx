import { Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/home" element={<Home />} /> */}
  </Routes>
)
