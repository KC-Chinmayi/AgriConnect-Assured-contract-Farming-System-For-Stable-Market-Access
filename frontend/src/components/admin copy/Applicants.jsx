import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';
import Navbar3 from '../Navbar3/Navbar3';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store=>store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);
    return (
        <div>
            <Navbar3 />
            <div className="flex items-center justify-center min-h-screen w-full -mt-48 sticky ">
            <div className='w-svw p-10 ml-5 mr-5 border-none'>
                <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
                
                <ApplicantsTable />
            </div>
            </div>
        </div>
    )
}

export default Applicants
// import React, { useEffect } from 'react'
// import Navbar from '../shared/Navbar'
// import ApplicantsTable from './ApplicantsTable'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { setAllApplicants } from '../../redux/applicationSlice'
// import axios from 'axios'
// import { APPLICATION_API_END_POINT } from '../../utils/constant'

// const Applicants = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const {applicants} =useSelector(store=>store.application)
//     useEffect(() => {
//         const fetchAllApplicants = async () => {
//             try {
//                 const res = await axios.get(` ${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
//                 dispatch(setAllApplicants(res.data.job));
//                 //    console.log(res.data);

               
               
//                 // if (res.data.success) {
//                 //     dispatch(setAllApplicants(res.data.job));

//                 // }

//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchAllApplicants();
//     }, []);
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto'>
//                 <h3 className='font-bold text-xl my-5'>Applicants {applicants?.applications.length}</h3>
//                 <ApplicantsTable />

//             </div>
//         </div>
//     )
// }

// export default Applicants