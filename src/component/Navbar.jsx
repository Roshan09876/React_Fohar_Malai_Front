import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { IoIosHome } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiNuclearWaste } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { LuContact } from "react-icons/lu";

const Navbar = () => {
    const [isClick, setIsclick] = useState(false);
    const handleClick = () => {
        setIsclick(!isClick);
    }

    const navigate = useNavigate();
    return (
        <nav className='w-full h-20 bg-customgreenbg sticky'>
            <div className='flex flex-row justify-between items-center px-2'>
                <a href='/' className='flex items-center gap-5 '>
                    <img className='object-contain' src={logo} height={80} width={80} alt='Not-Found' />
                    <div className='lg:hidden font-bold text-white sm:text-2xl xs:text-sm'>
                    <span>FOHAR MALAI</span>
                </div>
                </a>
                <div className='gap-5 font-medium text-white hidden lg:flex items-center justify-center cursor-pointer'>
                    <div className='flex flex-row items-center gap-1 '>
                        <IoIosHome size={20} />
                        <Link onClick={() => { navigate('/home') }}>Home</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdMiscellaneousServices size={20} />
                        <Link>Services</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiNuclearWaste size={20} />
                        <Link>E-Waste</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <HiOutlineLightBulb size={20} />
                        <Link>About Us</Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <LuContact size={20} />
                        <Link>Contact Us</Link>
                    </div>
                </div>
                <div className='flex text-white gap-2'>
                    <Button className='uppercase' onClick={() => {
                        navigate('/signup')
                    }} variant='green' >Signup</Button>
                    <Button className='uppercase' onClick={() => {
                        navigate('/login')
                    }} variant='green' >Login</Button>
                    <button onClick={handleClick} className='items-center justify-center lg:hidden'>
                        {
                            isClick ? (
                                <IoCloseSharp size={30} />
                            ) : (

                                <RxHamburgerMenu size={30} />
                            )}
                    </button>
                </div>

            </div>
            {
                isClick && (
                    <div className='lg:hidden transition bg-customgreenbg '>
                        <div className=' text-white font-medium p-2 rounded-lg'>
                            <div className='flex hover:bg-green-900 cursor-pointer gap-1 m-1 p-2 rounded-lg'>
                                <IoIosHome size={20} />
                                <Link>Home</Link>
                            </div>
                            <div className='flex hover:bg-green-900 cursor-pointer gap-1 m-1 p-2 rounded-lg'>
                                <MdMiscellaneousServices size={20} />
                                <Link>Services</Link>
                            </div>
                            <div className='flex hover:bg-green-900 cursor-pointer gap-1 m-1 p-2 rounded-lg'>
                                <GiNuclearWaste size={20} />
                                <Link>E-Waste</Link>
                            </div>
                            <div className='flex hover:bg-green-900 cursor-pointer gap-1 m-1 p-2 rounded-lg'>
                                <HiOutlineLightBulb size={20} />
                                <Link>About Us</Link>
                            </div>
                        </div>
                    </div>
                )}
        </nav>
    )
}

export default Navbar