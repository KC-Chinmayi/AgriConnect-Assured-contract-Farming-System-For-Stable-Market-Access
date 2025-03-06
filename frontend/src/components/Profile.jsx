import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { Contact, Mail, Pen } from 'lucide-react'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog '
import { useState } from 'react'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '../hooks/useGetAppliedJobs'
import Navbar3 from './Navbar3/Navbar3'

// const skills=["html","css","js","reactjs"]
const isResume = true;
const Profile = () => {
    useGetAppliedJobs();
    const [open,setOpen]=useState(false);
    const {user} =useSelector(store=>store.auth);


    return (
        <div>
            <Navbar3 />
            <div className='w-svw  '>
            <div className='max-w-4xl mx-auto bg-lime-200 border border-green-200  rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>



                    <div className='flex items-center gap-4'>
                      
                        <div className='font-medium text-xl'>
                            <h1>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>

                        </div>
                    </div>
                    {/* <Button onClick={() =>setOpen(true)}className="text-right" variant="outline">
                        <Pen />
                    </Button> */}

                </div>
                <div>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>

                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>


                </div>
                {/* <div className='my-5'>
                    <h1>skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>

                </div>
                <div className='grid w-full max-w-sm  items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                isResume ? <a target='blank ' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div> */}
                

            </div>
            <div className='max-w-4xl mx-auto bg-white  border border-green-400'>
                    <h1 className='font-bold text-lg my-5 mt-0 pt-4 bg-lime-400 '>Application status</h1>
                    <AppliedJobTable />
                </div>
                <UpdateProfileDialog open={open} setOpen={setOpen}/>

        </div>
        </div>
    )
}

export default Profile