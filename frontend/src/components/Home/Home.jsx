import React,{useEffect} from 'react'
import Navbar from '../shared/Navbar'
import Aboutus from '../Aboutus/Aboutus'
import Mission from '../Mission/Mission'
import Whatwedo from '../Whatwedo/Whatwedo'
import Contact from '../Contact/Contact'
import './Home.css'
import useGetAllJobs from '../../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Navbar3 from '../Navbar3/Navbar3'
import { ScrollLink } from 'react-scroll'


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }

  }, []);
  return (
    
    <div >
    
    <Navbar3/>
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Agriculture & Eco Farming</h1>
        <p>Assured Contract Farming</p>
        <button className="cta-btn" Link to="/login" >Discover More</button>
        <li>
                                   
                                </li>
      </div>
    </section>
    <div>
    <Aboutus/>
  </div>
    <Mission/>
    <div>
    <Whatwedo/>
    </div>
    <div>
    <Contact/>
    </div>
    <div>
  
    </div>
    
  </div>

 
   

  )
}

export default Home