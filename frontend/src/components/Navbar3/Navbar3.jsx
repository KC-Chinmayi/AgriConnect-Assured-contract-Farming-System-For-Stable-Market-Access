import React, { useState } from 'react';
import './Navbar3.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ScrollLink } from "react-scroll";

import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setUser } from '@/redux/authSlice';

const Navbar3 = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false); // State for toggle menu

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Error logging out");
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar-container">
            <h1 className="navbar-title">
                Agri<span>Connect</span>
            </h1>

            {/* Toggle Button */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
            </div>

            <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                <ul className="navbar-links">
                    {!user ? (
                        <div>
                            <ul className="navbar-links">
                                <li>

                                    <ScrollLink to="home" smooth={true} duration={500}>
                                        <Link to="/" >
                                            Home
                                        </Link>
                                    </ScrollLink>

                                </li>
                                <li>
                                    <ScrollLink to="about" smooth={true} duration={500}>
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="missions" smooth={true} duration={500}>
                                        Missions
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="what-we-do" smooth={true} duration={500}>
                                        What We Do
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="contact" smooth={true} duration={500}>
                                        Contact
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    ) : (

                        // <div>
                        //     <ul className="navbar-links">
                        //         <li><Link to="/Page2">Jobs</Link></li>
                        //     <li><Link to="/">Home</Link></li> 
                        //     </ul>
                        //     </div>

                        user && user.role === 'company' ? (
                            <>
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/admin/companies">Companies</Link></li>
                                <li><Link to="/admin/jobs">Crops</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/Page2">crops</Link></li>
                                {/* <li><Link to="/browse"> Browse</Link></li> */}
                            </>
                        )


                    )

                    }

                    {/* <li><Link to="/browse">Browse</Link></li> */}
                </ul>
            </div>
            <div >
                {!user ? (
                    <div className="auth-buttons">
                        <div >
                            <Link to="/login">
                                <Button className="login-btn"><h3 >Login</h3></Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/signup">
                                <Button className="signup-btn">Sign Up</Button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <Popover className>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage
                                    src={user?.avatar || "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"}
                                    alt="User Profile Picture"
                                />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="popover-user-info">
                                <Avatar>
                                    <AvatarImage src={user?.avatar || "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"} />
                                    {/* <AvatarFallback>U</AvatarFallback> */}
                                </Avatar>
                                <div>
                                    <h4 className="font-medium text-white ">{user?.fullname || "Guest"}</h4>
                                    <p className="text-sm text-white">{user?.profile?.bio || "Welcome to AgriConnect!"}</p>
                                </div>
                            </div>
                            <div className="popover-actions">




                                {
                                    user && user.role === "farmer" && (
                                        <div className="popover-action">
                                            <User2 />
                                            <Button variant="link">
                                                <Link to="/profile">View Profile</Link>
                                            </Button>
                                        </div>

                                    )
                                }



                                <div className="popover-action">
                                    <LogOut />
                                    <Button onClick={logoutHandler} variant="link">
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>

    );
};

export default Navbar3;