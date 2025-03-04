import React from 'react';
import './CompanyProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'


const jobId="kjhgfrdesx"

// Make sure the CSS file is correctly linked

const Job = ({ job}) => {
  const navigate=useNavigate();
  return (
    <div className="company-card">
     {/* < Button>
                    <Avatar>
                        <AvatarImage src="https://th.bing.com/th/id/OIP.0jl9haemnq0P4eYzzrfNOgHaGw?rs=1&pid=ImgDetMain" />
                    </Avatar>
                </Button>
       */}

      <div className="company-details">
      <div className='flex flex-col items-start gap-2 mt-4'>
                <h3 className='font-bold text-lg my-2'>{job?.crop}</h3>
                <h3 className='text-sm text-gray-600'>Price:{job?.price}</h3>

                <h3 className='font-medium text-lg'>CompanyName:{job?.company?.name}</h3>
                <h3 className='text-sm text-gray-500'>CompanyLocation:{job?.location}</h3>
           
            </div>
                   
              
            </div>
          
            {/* <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}</Badge>
            </div> */}
            <div className='flex items-center gap-4 mt-4'>

                <Button onClick={()=>navigate(`/description/${job?._id}`)}variant ="outline" className="bg-[#7209b7] text-gray-200">Details</Button>
                {/* <Button className="bg-[#7209b7]">Save for later</Button> */}


      </div>
    </div>
  );
};

export default Job;