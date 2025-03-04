import { useState } from 'react'
// import reactLogo from '<./components/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'

import Signup from './components/Signup/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import Page2 from './components/Page2/Page2'
import JobDescription from './components/JobDescription'
import Login from './components/Login/Login'
import CompanyDetails from './components/CompanyDetails/CompanyDetails'
import Companies from './components/admin copy/Companies'
import CompanyCreate from './components/admin copy/CompanyCreate'
import CompanySetup from './components/admin copy/CompanySetup'
import AdminJobs from './components/admin copy/AdminJobs'
import PostJob from './components/admin copy/PostJob'
import Applicants from './components/admin copy/Applicants'
import ProtectedRoute from './components/admin copy/ProtectedRoute'

const appRouter = createBrowserRouter ([
  {
    path:'/',
    element:<Home/>
  },
  
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/description/:id',
    element:<CompanyDetails/>
  },
  {
    path:'/Page2',
    element:<Page2/>
  },
  //admin
  {
    path:"/admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },

  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute>
  },
  

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router ={appRouter}/> 
      
    </>
  )
}

export default App
