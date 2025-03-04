import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

import axios from 'axios'
import { setSingleCompany } from '../../redux/companySlice'
import Navbar3 from '../Navbar3/Navbar3'



const CompanyCreate = () => {
    const navigate=useNavigate();
    const [companyName,setCompanyName]=useState();
    const dispatch=useDispatch();
    
    const registerNewCompany= async()=>{
        try {
            const res =await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId=res?.data?.company?._id;
                // navigate(`/admin/companies/${companyId}`);
                navigate(`/admin/jobs`);
            }
        } catch (error) {
           console.log(error)
        }
    }
  return (
    <div className='w-svw'>
        <Navbar3/>
        <div >
        <div className='max-w-4xl  mx-auto border-green-800 '>
            <div className='my-10 '>
            <h1 className='font-bold text-2xl' >Your company name</h1>
            <p className='text-gray-500'>Enter the name of your company ?</p>
            </div>
       
        <Label>Company Name</Label> 
        <Input type="text" className="my-2" placeholder="Agro Ltd,Samrudhi Ltd etc" onChange={(e)=>setCompanyName(e.target.value)} />
        <div className='flex items-center gap-2 my-10'>
<Button variant="outline" onClick={()=>navigate("/admin/companies")}>cancel</Button>
<Button onClick={registerNewCompany}>Continue</Button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CompanyCreate