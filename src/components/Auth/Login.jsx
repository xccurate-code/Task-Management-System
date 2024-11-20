// import { useState } from "react"
// import React from 'react'


// const Login = ({handleLogin}) => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()
//         handleLogin(email, password)
//         setEmail("")
//         setPassword("")
//     }

    
//     return (
//         <div className='flex h-screen w-screen items-center justify-center'>
//             <div className='border-2 rounded-xl border-emerald-950 p-20'>
//                 <form onSubmit={(e) => {
//                     submitHandler(e)
//                 }}
//                     className='flex flex-col items-center justify-center'>

//                     <input value={email} onChange={(e) => {
//                         setEmail(e.target.value)
//                     }}
//                         required className=' w-72 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-4 px-8 placeholder:text-gray-600' type="email" placeholder='Enter Your Email' />

//                     <input value={password} onChange={(e) => {
//                         setPassword(e.target.value)
//                     }}
//                         required className=' w-72 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-4 px-8 mt-3 placeholder:text-gray-600' type="password" placeholder='Enter Password' />

//                     <button className='active:scale-95 w-72 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-4 px-8 mt-9 hover:bg-emerald-950 hover:text-white'>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Login



import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 active:scale-95 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
