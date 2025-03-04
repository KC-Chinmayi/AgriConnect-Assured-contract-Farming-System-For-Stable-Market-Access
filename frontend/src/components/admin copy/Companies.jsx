import React from 'react'
import { Input } from '../ui/input'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'
import Navbar3 from '../Navbar3/Navbar3'



const Companies = () => {
  useGetAllCompanies();
    const navigate=useNavigate();
  return (
    // "w-full max-w-8xl p-4  border-green-950 bg-white rounded-lg shadow border bg-lime-100 border-green-800"
    <div>
        <Navbar3/>
        <div className="flex items-center justify-center min-h-screen w-full -mt-48 sticky ">
  <div className="w-svw p-10 ml-5 mr-5 border-none">
    <div className="flex items-center justify-between mb-6">
      {/* <Input
        className="w-fit"
        placeholder="Filter by name"
      /> */}
      <Button  className="bg-lime-300 " onClick={() => navigate("/admin/companies/create")}>
        Register New Company
      </Button>
    </div>
    <CompaniesTable />
  </div>
</div>
       
        

    </div>
  )
}

export default Companies