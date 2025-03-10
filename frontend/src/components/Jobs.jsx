import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'

import { useSelector } from 'react-redux'
import Job from './Job'




const Jobs = () => {
    const {allJobs}=useSelector(store=>store.job)
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                    <FilterCard />
                    </div>
                    
                    {/* JobCard */}
                    {
                        allJobs.length<=0?<span>Job not found</span>:(
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap4'>
                                    {
                                        allJobs.map((job)=>(
                                            <div key={job?._id}>
                                                <Job job={job}/>
                                                </div>
                                
                                        ))
                                    }
                                </div>
                            </div>
                        )
                        
                    }

                </div>


            </div>



        </div>
    )
}

export default Jobs