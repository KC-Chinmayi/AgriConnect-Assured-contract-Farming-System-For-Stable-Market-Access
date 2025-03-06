import {  Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate=useNavigate();
    const daysAgoFunction=(mongodbTime) =>{
        const createdAt=new Date(mongodbTime);
        const currentTime=new Date();
        const timeDifference =currentTime-createdAt;
        return Math.floor(timeDifference/(4*60*60*1000));

    }
    return (
        <div className='p-5 rounded-md dhadow-xl bg-white border border-gray-100'>
            <div className='flex items-center gap-2 my-2'>
            <p className='text-sm text-gray-500'>{job?.createdAt==0? "Today":`${daysAgoFunction(job?.createdAt)} days ago`}</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            
            <div className='flex items-center gap-2 my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="https://th.bing.com/th/id/OIP.0jl9haemnq0P4eYzzrfNOgHaGw?rs=1&pid=ImgDetMain" />
                    </Avatar>
                </Button>
                <div>
                    <h3 className='font-medium text-lg'>{job?.company?.name}</h3>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-lg my-2'>{job?.title}</h3>
                <p className='text-sm text-gray-600'>{job?.description}</p>
           
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>

                <Button onClick={()=>navigate(`/description/${job?._id}`)}variant ="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for later</Button>


            </div>
        </div>
    )
}

export default Job