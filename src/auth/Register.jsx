import React from 'react'
import { Input } from '../components/ui/input'
import { FaUserCircle } from "react-icons/fa";
import { Button } from '../components/ui/button';
import image from '../../src/assets/image2.png'
import auth from '../../src/assets/auth.png'


const Register = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <img className='hidden md:block' src={image} height={420} width={420} alt="" />
        <div className='w-3/4 md:w-1/3'>
          <div className='flex items-center justify-center' >
            <img src={auth} height={140} width={140} alt="" />
          </div>
      <h1 className='text-center mb-3 font-medium text-customgreenbg md:text-4xl sm:text-3xl xs:text-xl'>Please fill below form for SignUp</h1>
          <Input className='mb-4 border-green-700 placeholder:text-black ' type='text' placeholder='Enter fullName' ></Input>
          <Input className='mb-4 border-green-700 placeholder:text-black' placeholder='Enter email' type='email' ></Input>
          <div className='mb-4 flex gap-2'>
            <Input className=' border-green-700 placeholder:text-black' type='password' placeholder='Enter password' ></Input>
            <Input className='border-green-700 placeholder:text-black' placeholder='Enter confirm-password' type='password' ></Input>
          </div>
          <Input className='mb-4 border-green-700 placeholder:text-black' type='address' placeholder='Enter address' ></Input>
          <Input className='mb-7 border-green-700 placeholder:text-black' placeholder='Enter Phone-Number' type='phone' ></Input>
          <div className='justify-center items-center flex' >
            <Button className='w-1/2' variant='green'>SignUp</Button>
          </div>
          <div className=' flex justify-center gap-2 mt-2'>
            <span>Already have an account?</span>
            <a className='cursor-pointer' href='/login'>Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
