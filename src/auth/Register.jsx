
import React from 'react'
import { Input } from '../components/ui/input'
import { FaUserCircle } from "react-icons/fa";
import { Button } from '../components/ui/button';
import logo from '../../src/assets/logo.png'

const Register = () => {
  return (
    <div className='px-10 py-5 flex justify-center h-1/2'>
      <form className='bg-white shadow-xl rounded px-10 py-10 w-full'>
        <div className='text-center text-4xl text-green-600 mb-5 '>Please fill up this form for Register</div>

        <div className='py-5 flex items-center justify-center'>
          <img class="w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={logo} alt="" />
        </div>
        <div className='flex flex-col sm:flex-row gap-5 md:justify-between'>
          <Input className=''
            type='text'
            placeholder='Enter your firstname'
            icon={FaUserCircle}
          />
          <Input
            type='text'
            placeholder='Enter your lastname'
            icon={FaUserCircle}
          />
        </div>
        <Input className='mt-5'
          type='email'
          placeholder='Enter your email'
          icon={FaUserCircle}
        />
        <div className='flex gap-10 mt-5'>
          <Input
            type='text'
            placeholder='Enter your Username'
            icon={FaUserCircle}
          />
          <Input
            type='password'
            placeholder='Enter your Password'
            icon={FaUserCircle}
          />
        </div>
        <div className='flex gap-10 mt-5'>
          <Input
            type='text'
            placeholder='Enter your Address'
            icon={FaUserCircle}
          />
          <Input
            type='number'
            placeholder='Enter your Phone-num'
            icon={FaUserCircle}
          />
        </div>
        <div className='flex justify-center items-center'>
          <Button className='mt-10 text-2xl mb-5' style={{ width: '350px', height: '60px' }} variant='green'>Register</Button>
        </div>
        <div className=' flex justify-center gap-2'>
          <span>Already have an account?</span>
          <a className='cursor-pointer' href='/login'>Login</a>
        </div>
      </form>
    </div>
  )
}

export default Register
