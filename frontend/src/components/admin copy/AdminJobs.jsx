import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import Navbar3 from '../Navbar3/Navbar3'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div>
      <Navbar3/>
      <div className="flex items-center justify-center min-h-screen w-full -mt-48 sticky ">
      <div className='w-svw p-10 ml-5 mr-5 border-none'>
        <div className='flex items-center justify-between mb-6'>

          {/* <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          /> */}
          <Button className="bg-lime-300" onClick={() => navigate("/admin/jobs/create")}>Add new crop</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
    </div>
  )
}

export default AdminJobs