import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import firebaseAppConfig from "../util/firebase-config"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"

const auth = getAuth(firebaseAppConfig)
const Login =()=>{
    const [passwordType,setPasswordType] = useState("password")
    const [error,setError] = useState(null)
    const [loader,setLoader] = useState(false)
    const [formvalue, setFormvalue] = useState({
        email:'',
        password:'',
    })
    const navigate = useNavigate()

        const login = async (e)=>{
            try{
           e.preventDefault()
            setLoader(true)
           const user = await signInWithEmailAndPassword(auth,formvalue.email,formvalue.password)
           navigate("/")
          
            }
            catch(err)
            {
                setError("Invalid Credential")
            }
            finally{
             setLoader(false)
            }
        }
        const handleInput=(e)=>{
         const input = e.target
         const value = input.value
         const name = input.name
         
         setFormvalue({
            ...formvalue,
            [name]:value
         })
         setError(null)
        }
    return(
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
          
            <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover" alt="" />
          
           <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-lg text-gray-600">Enter Details for login</p>
           
            <form className="mt-4 space-y-6" onSubmit={login}>
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">E-Mail</label>
                    <input
                      onChange={handleInput}
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
                    onChange={handleInput}
                    type={passwordType}
                    name="password"
                    placeholder="***********"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                   
                     <button onClick={()=>setPasswordType(passwordType==='password'?'text':'password')} type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
                        {passwordType==='password'?<i className="ri-eye-line"></i>: <i className="ri-eye-off-line"></i>}
                       
                        
                        </button>
                </div>
                {
                        loader ? 
                        <h1>Loading...</h1>
                        :
                        <button className="p-3 bg-blue-600 text-white rounded font-semibold hover:bg-rose-600">Login</button> 
                    }
               
               
            </form>
        
            <div>
                Don't have an account ? <Link to='/signup' className="text-blue-600 text-semibold">Register Now</Link>
            </div>
            {
                error &&
                <div className="flex justify-between items-center mt-2 bg-rose-500 text-white font-semibold p-3 rounded shadow animate__animated animate__pulse">
                <p>{error}</p>
                <button onClick={()=>setError(null)}>
                    <i className="ri-close-line"></i>
                </button>
            </div>
            }

           </div>
        </div>
    )
    }
    export default Login