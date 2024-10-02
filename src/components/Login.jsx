import { useState } from "react"
import { Link } from "react-router-dom"

const Login =()=>{
    const [passwordType,setPasswordType] = useState("password")
    return(
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
          
            <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover" alt="" />
          
           <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-lg text-gray-600">Enter Details for login</p>
            <form className="mt-4 space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">E-Mail</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                </div>
                <div className="flex flex-col relative">
                    <label className="font-semibold text-lg mb-1">Password</label>
                    <input
                    type={passwordType}
                    name="email"
                    placeholder="***********"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                     <button onClick={()=>setPasswordType(passwordType==='password'?'text':'password')} type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
                        {passwordType==='password'?<i className="ri-eye-line"></i>: <i className="ri-eye-off-line"></i>}
                       
                        
                        </button>
                </div>
                <button className="p-3 bg-blue-600 text-white rounded font-semibold hover:bg-rose-600">Login</button>
               
            </form>
        
            <div>
                Don't have an account ? <Link to='/signup' className="text-blue-600 text-semibold">Register Now</Link>
            </div>

           </div>
        </div>
    )
    }
    export default Login