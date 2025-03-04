import React, { useEffect } from 'react';
import './Page2.css'; // Import your CSS file
import Job from '../CompanyProfile/Job';
import { useSelector } from 'react-redux';
import Navbar3 from '../Navbar3/Navbar3';
import { useNavigate } from 'react-router-dom';
import useGetAllJobs from '../../hooks/useGetAllJobs';

const Page2 = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const {user}=useSelector(store => store.auth);
   
    const navigate = useNavigate();
    useEffect(() => {
      if (user?.role === 'company') {
        console.log(user.role)
        navigate("/admin/companies");
      }
      },[]);

    return (
        <div className="pagebody">
            <div className="navbar">
                <Navbar3 />
            </div>
            <div className="container">
         
                <div className="company-list">
                    {
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div>
                                {
                                    allJobs.map((job) => (
                                        <div key={job?._id}>
                                            <Job job={job} />
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Page2;
