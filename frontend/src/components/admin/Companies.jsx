import React from 'react'
import { Input } from '../ui/input'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import Navbar3 from '../Navbar3/Navbar3'



const Companies = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar3/>
        <div className='max-w-6xl mx-auto my-10 bg-white'>
            <div className='flex items-center justify-between '>
            {/* <Input
            className='w-fit'
            placeholder="Filter by name"/> */}
            <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
            </div>
            <CompaniesTable/>
            
        </div>
        

    </div>
  )
}

export default Companies