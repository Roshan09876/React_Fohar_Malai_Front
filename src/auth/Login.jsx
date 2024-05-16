import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import image from '../../src/assets/image2.png'
import auth from '../../src/assets/auth.png'

const Login = () => {
    return (
        <div className='mt-10'>
        <div className='flex flex-col md:flex-row justify-evenly items-center'>
          <img className='hidden md:block mt-5' src={image} height={420} width={420} alt="" />
          <div className='w-3/4 md:w-1/3'>
            <div className='flex items-center justify-center' >
              <img src={auth} height={140} width={140} alt="" />
            </div>
        <h1 className='text-center mb-3 font-medium text-customgreenbg md:text-4xl sm:text-3xl xs:text-xl'>Please fill below form to Login</h1>
            <Input className='mb-4 border-green-700 placeholder:text-black ' type='text' placeholder='Enter username' ></Input>
            <Input className='mb-4 border-green-700 placeholder:text-black' placeholder='Enter password' type='password' ></Input>
            
            <div className='justify-center items-center flex' >
              <Button className='w-1/2' variant='green'>Login</Button>
            </div>
            <div className=' flex justify-center gap-2 mt-2'>
              <span>Don't have an account?</span>
              <a className='cursor-pointer' href='/signup'>Register</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
