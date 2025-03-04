import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import {USER_API_END_POINT} from '@/utils/constant'
import {toast} from 'sonner'
import { setUser } from '@/redux/authSlice'


const Navbar = () => {
   
    const {user}=useSelector(store=>store.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logoutHandler =async() =>{
        try {
            const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
            if(res.data.success){
                dispatch(setUser(null));
            navigate("/");
            toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            
        }
    }
    return (
        <div >
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <h1 className='text-2xl font-bold'>Job <span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex font-medium items-center gap-5'>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/browse"> Browse</Link></li>
                    
                </ul>
                {
                    !user?(
                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button variant="outline">Login</Button></Link>
                            <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] ">SignUp</Button></Link>
                           
                            </div>
                    ):
                    (
<Popover className="cursor-pointer" >
                    <PopoverTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" />

                        </Avatar>

                    </PopoverTrigger>
                    <PopoverContent className>
                        <div className='flex gap-4 space-y-2' >
                            <Avatar className="cursor-pointer">
                                <AvatarImage src={user?.profile.profilePhoto} />
                            </Avatar>

                            <div>
                                <h4 className="font-medium">Mernstack</h4>
                                <p className="text-sm text-muted-foreground">jihugyftdresadxfghjgvfcdx jhgfd jhgfd</p>
                            </div>
                        </div>
                        <div className='flex-col text-gray-600'>
                           
                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                            <User2/>
                            <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                            </div>
                           
                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                            <LogOut/>
                            <Button onClick={logoutHandler}variant="link">Logout</Button>
                            </div>
    
                        </div>
                        
                    </PopoverContent>
                </Popover>

                    )
                }
                
            </div>
        </div>
    )
}

export default Navbar