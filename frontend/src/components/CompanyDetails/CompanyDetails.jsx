import React, { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Navbar3 from '../Navbar3/Navbar3';

const CompanyDetails = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied = singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

      if (res.data.success) {
        setIsApplied(true); // Update the local state
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); // Helps us to update the UI in real time
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some((application) => application.applicant === user?._id)
          ); // Ensure the state is in sync with fetched data
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full -mt-48 sticky">
      {/* Navbar */}
      <Navbar3 />

      {/* Job Details */}
      <div className="w-svw p-10 ml-5 mr-5 border-none mt-64"> {/* Add mt-16 to create spacing below fixed navbar */}
        <div className="flex items-center justify-between ">
          <div>
            {/* <h1 className="font-bold text-xl">{singleJob?.crop}</h1> */}
            {/* <div className="flex items-center gap-2 mt-4">
              <Badge className="text-blue-700 font-bold" variant="ghost">
                {singleJob?.postion} Positions
              </Badge>
              <Badge className="text-[#F83002] font-bold" variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className="text-[#7209b7] font-bold" variant="ghost">
                {singleJob?.salary}LPA
              </Badge>
            </div> */}
          </div>
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'
            }`}
          >
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-small py-4">{singleJob?.company?.name}</h1>
        <div className="my-4 mt-12 justify-center font-sans border-lime-900 ">
          <h1 className="font-bold text-3xl my-1">
            crop: <span className="pl-4 font-normal text-gray-800">{singleJob?.crop}</span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Quantity(in kgs): <span className="pl-4 font-normal text-gray-800">{singleJob?.quantity}</span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Price(in Rs): <span className="pl-4 font-normal text-gray-800">{singleJob?.price}</span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Expected land(in cents): <span className="pl-4 font-normal text-gray-800">{singleJob?.expectedland}</span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Company Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location} </span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Deadline: <span className="pl-4 font-normal  text-gray-800">{singleJob?.deadline}</span>
          </h1>
          <h1 className="font-bold  text-3xl my-1">
            Total Applicants:{' '}
            <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>
          </h1>
          <h1 className="font-bold   text-3xl my-1">
            Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split('T')[0]}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
