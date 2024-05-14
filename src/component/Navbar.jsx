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
        <nav className='w-full h-20 bg-customgreenbg'>
            <div className='flex flex-row justify-between items-center px-2'>
                <div>
                    <img className='object-contain' src={logo} height={80} width={80} alt='Not-Found' />
                </div>
                <div className='gap-5  font-semibold text-white hidden md:flex items-center justify-center cursor-pointer'>
                    <div className='flex flex-row items-center gap-1 '>
                        <IoIosHome size={20} />
                        <Link onClick={() => { navigate('/home') }}>Home</Link>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <MdMiscellaneousServices size={20} />
                        <Link>Services</Link>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <GiNuclearWaste size={20} />
                        <Link>E-Waste</Link>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <HiOutlineLightBulb size={20} />
                        <Link>About Us</Link>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
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
                    <div className='items-center justify-center hidden'>
                        <RxHamburgerMenu size={30} />
                    </div>
                    <button onClick={handleClick} className='items-center justify-center hidden sm:flex xs:flex md:hidden'>
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
                    <div className='md:hidden transition'>
                        <div className='font-semibold text-black pt-2 pb-2 px-2'>
                            <div className='flex flex-row items-center gap-1 hover:underline'>
                                <IoIosHome size={20} />
                                <Link>Home</Link>
                            </div>
                            <div className='flex flex-row items-center gap-1 hover:underline'>
                                <MdMiscellaneousServices size={20} />
                                <Link>Services</Link>
                            </div>
                            <div className='flex flex-row items-center gap-1 hover:underline'>
                                <GiNuclearWaste size={20} />
                                <Link>E-Waste</Link>
                            </div>
                            <div className='flex flex-row items-center gap-1 hover:underline'>
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
