import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import logo from '../../src/assets/logo.png'

const Login = () => {
    return (
        <div className='px-10 py-10 flex items-center justify-center mt-10  '>
            <form className='shadow-xl border-lime-600 rounded px-10 py-10 '>
                <div className='text-center md:text-4xl xs:text-4xl text-green-600 mb-5 '>Please fill up this form for Login</div>
                <div className='flex items-center justify-center'>
                    <img src={logo} className='rounded-full ring-2 ring-gray-300 dark:ring-gray-500 w-20 h-20  ' alt='Not-Found' />
                </div>
                <div className='items-center justify-center flex flex-col gap-5 mt-10'>
                    <Input className='w-4/5'
                        type='text'
                        placeholder='Enter UserName'
                    />
                    <Input className='w-4/5'
                        type='password'
                        placeholder='Enter Password'
                    />
                    <Button className='mt-3 text-3xl w-4/5 h-1/2 text-center' variant='green'>Login</Button>
                    <div className=' flex justify-center gap-2'>
                        <span>Don't have an account?</span>
                        <a className='cursor-pointer' href='/signup'>SignUp</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
