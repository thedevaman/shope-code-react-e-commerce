import { useEffect, useState } from "react"
import firebaseAppConfig from "../util/firebase-config"
import Layout from "./Layout"
import { onAuthStateChanged,getAuth, } from "firebase/auth"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { useNavigate } from "react-router-dom"

const auth = getAuth(firebaseAppConfig)
const storage = getStorage()


const Profile = ()=>{
    const navigate = useNavigate()
    const [session,setSession] = useState(null)
    const [formvalue, setFormValue] = useState({
        fullname:'',
        email:'',
        mobile:'',
        address:'',
        city:'',
        state:'',
        country:'' ,
        pincode:''
    })
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user)
        {
                setSession(user)
        }else{
            setSession(false)
            navigate("/login")
        }
    })
   },[])

   const setProfilePicture = async (e)=>{
      const input = e.target
      const file = input.files[0]
      const filenamearray = file.name.split(".") 
      const ext = filenamearray[filenamearray.length-1]
      const filename = Date.now()+'.'+ext
      const path = `profile_pic/${filename}`
      const bucket = ref(storage,path)
      const snapshot = await uploadBytes(bucket, file)
      const imageurl = `https://firebasestorage.googleapis.com/v0/b/shopecode-ba1d7.appspot.com/o/${path}`
      console.log(imageurl)
     
   }

   const handleForm= (e)=>{
    const input = e.target
    const name = input.name
    const value = input.value
    setFormValue({
      ...formvalue,
      [name]:value
  })
  
  }
   if(session===null)
    return(
<div>Loading...</div>
    )




return(
    <Layout>
    <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12">
        <div className="flex gap-3">
            <i className="ri-user-line text-4xl"></i>
            <h1 className="text-3xl font-semibold">Profile </h1>
        </div>
        <hr className="my-6" />
        <div className="w-24 h-24 mx-auto relative mb-6">
        <img src="/images/avt.webp" className="rounded-full border w-24 h-24" />
        <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0 w-full h-full" onChange={setProfilePicture} />
        </div>
        <form className="grid grid-cols-2 gap-6">
           
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Full name</label>
            <input 
            name="fullname"
            className="p-2 rounded border border-gray-300"
            value={session.displayName}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Email</label>
            <input 
            name="email"
            type="email"
            className="p-2 rounded border border-gray-300"
            value={session.email}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Mobile</label>
            <input 
            name="mobile"
            type="number"
            className="p-2 rounded border border-gray-300"
            value={formvalue.mobile}
            required
            onChange={handleForm}
            />
            </div>
            <div />


            <div className="grid grid-col gap-2 col-span-2">
            <label className="text-lg font-semibold">Area/Street/Village</label>
            <input 
            name="address"
            type="text"
            className="p-2 rounded border border-gray-300"
            value={formvalue.address}
            required
            onChange={handleForm}
            />
            </div>

            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">City</label>
            <input 
            name="city"
            type="text"
            className="p-2 rounded border border-gray-300"
            value={formvalue.city}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">State</label>
            <input 
            name="state"
            type="text"
            className="p-2 rounded border border-gray-300"
            value={formvalue.state}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Country</label>
            <input 
            name="country"
            type="text"
            className="p-2 rounded border border-gray-300"
            value={formvalue.country}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Pincode</label>
            <input 
            name="pincode"
            type="number"
            className="p-2 rounded border border-gray-300"
            value={formvalue.pincode}
            required
            onChange={handleForm}
            />
            </div>
            <button className="px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600">
                <i className="ri-save-line mr-2"></i>
                Save
            </button>

        </form>
    </div>
    </Layout>
)
}
export default Profile