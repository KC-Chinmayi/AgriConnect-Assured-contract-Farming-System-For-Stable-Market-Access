import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { Button } from '../ui/button';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (status, id) => {
        console.log('called');
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <Table className="bg-lime-200  rounded-lg shadow border">
                <TableCaption>A list of your recent applied user</TableCaption>
                <TableHeader className="bg-lime-400">
                    <TableRow >
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        {/* <TableHead>Resume</TableHead> */}
                        <TableHead>Date</TableHead>
                        <TableHead className="">Action</TableHead>
                        <TableHead >send agreement</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <tr key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                {/* <TableCell >
                                    {
                                        item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                                    }
                                </TableCell> */}
                                <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>

                                </TableCell>
                               
                                <TableCell >
  <Button
    onClick={() => {
      const email = item?.applicant?.email; // Get the applicant's email
      if (email) {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, "_blank");
      } else {
        toast.error("Applicant email not available");
      }
    }}
  >
    Contact Applicant
  </Button>
</TableCell>

                            </tr>
                        ))
                    }
                     

                </TableBody>

            </Table>
        </div>
    )
}

export default ApplicantsTable



// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { SpeakerModerateIcon } from '@radix-ui/react-icons';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT } from '../../utils/constant';
// import { toast } from 'sonner';


// const shortListingStatus = ["Accepted", "Rejected"];
// const ApplicantsTable = () => {
    
//     const { applicants } = useSelector(store => store.application);
//     const statusHandler =async (status,id)=>{
//         try {
//             axios.defaults.withCredentials=true;
//             const res=await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status},{
//                 withCredentials:true
//         });
//         if(res.data,success){
//             toast.success(res.data.message);
//         }
//         } catch (error) {
//             toast.error(error);
//         }
//     }

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied users</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                     </TableHeader>
//                     <TableBody>{
//                         applicants && applicants?.applications?.map((item)=>(
//                             <tr key={item._id}>
//                             <TableCell>{item?.applicant?.fullname}</TableCell>
//                             <TableCell>{item?.applicant?.email}</TableCell>
//                             <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                             <TableCell >{
// item.applicant?.profile?.resume?<a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a>:<span>NA</span>
//                                 }
//                                 </TableCell>
//                             <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
//                             <TableCell className="float-right cursor-pointer">
//                                 <Popover>
//                                     <PopoverTrigger>
//                                         <MoreHorizontal />

//                                     </PopoverTrigger>
//                                     <PopoverContent className="w-32">
//                                         {

//                                             shortListingStatus.map((status, index) => {
//                                                 return (
//                                                     <div onClick={()=>statusHandler(status,item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
//                                                         <span>{status}</span>
//                                                     </div>
//                                                 )
//                                             })
//                                         }

//                                     </PopoverContent>
//                                 </Popover>

//                             </TableCell>
//                         </tr>

//                         ))}
                       
//                     </TableBody>
              
//             </Table>
//         </div>
//     )
// }

// export default ApplicantsTable