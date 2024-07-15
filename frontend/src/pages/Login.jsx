import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import {useInputValidation} from '6pp'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    function toggleLogin() {
        setIsLogin(!isLogin);
    }

    const name = useInputValidation("");
    const password = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("");

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-yellow-500 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">


                {

//-----------------------------------Login-------------------------------------------------- 
                    isLogin ? (
                        <>
                            <div className='mb-4'>
                                <label htmlFor="username" className='block text-sm font-medium text-gray-700'>User Name</label>
                                <input type='text' id="username" placeholder='User Name' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                                <input type='password' id="password" placeholder='Password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                            </div>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full'>Sign in</button>
                            <p className='mt-4 text-center'>OR</p>
                            <span onClick={toggleLogin} className='cursor-pointer text-blue-500 hover:underline text-center block'>Sign up Instead</span>
                        </>


                    ) : (

//------------------------------------Sign up------------------------------------------------ 
                        <>
                            <div className='mb-4 flex justify-center'>
                                <CgProfile className='text-2xl mr-2' />
                                <input type='file' className='block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 p-2' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                                <input type='text' id="name" placeholder='Name' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="bio" className='block text-sm font-medium text-gray-700'>Bio</label>
                                <input type='text' id="bio" placeholder='Bio' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="username" className='block text-sm font-medium text-gray-700'>User Name</label>
                                <input type='text' id="username" placeholder='User Name' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                                <input type='password' id="password" placeholder='Password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'/>
                            </div>
                            <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full'>Sign up</button>
                            <p className='mt-4 text-center'>OR</p>
                            <span onClick={toggleLogin} className='cursor-pointer text-blue-500 hover:underline text-center block'>Sign in Instead</span>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Login;
