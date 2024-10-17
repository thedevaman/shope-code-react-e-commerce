import { useEffect, useState } from "react"
import firebaseAppConfig from "../util/firebase-config"
import Layout from "./Layout"
import { onAuthStateChanged,getAuth, updateProfile, } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const auth = getAuth(firebaseAppConfig)
const storage = getStorage()


const Profile = ()=>{
    const [uploading,setUploading] = useState(false)
    const navigate = useNavigate()
    const [session,setSession] = useState(null)
    const [formvalue, setFormValue] = useState({
        fullname:'',
        email:'',
        mobile:''
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

   useEffect(()=>{
      if(session)
      {
        setFormValue({
            ...formvalue,
            fullname:session.displayName,
            mobile:(session.phoneNumber?session.phoneNumber:'')
        })
      }
   },[session])

   const setProfilePicture = async (e)=>{
      const input = e.target
      const file = input.files[0]
      const filenamearray = file.name.split(".") 
      const ext = filenamearray[filenamearray.length-1]
      const filename = Date.now()+'.'+ext
      const path = `profile_pic/${filename}`
      const bucket = ref(storage,path)
      setUploading(true)
      const snapshot = await uploadBytes(bucket, file)
      const url = await getDownloadURL(snapshot.ref)
      await updateProfile(auth.currentUser,{
        photoURL:url
      })
      setUploading(false)
      setSession({
        ...session,
        photoURL:url
      })
     
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

const saveprofileinfo = async (e)=>{
  e.preventDefault()
  await updateProfile(auth.currentUser,{
    displayName:formvalue.fullname,
    phoneNumber:formvalue.mobile
  })

  new Swal({
    icon:'success',
    title:'Profile Updated'
  })
}


return(
    <Layout>
    <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12">
        <div className="flex gap-3">
            <i className="ri-user-line text-4xl"></i>
            <h1 className="text-3xl font-semibold">Profile </h1>
        </div>
        <hr className="my-6" />
        <div className="w-24 h-24 mx-auto relative mb-6">
        {
            uploading?
            <img src="/images/loader.gif"/>
            :
            <img src={session.photoURL?session.photoURL:"/images/avt.webp"} className="rounded-full border w-24 h-24" />
        }
        
        <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0 w-full h-full" onChange={setProfilePicture} />
        </div>
        <form className="grid grid-cols-2 gap-6" onSubmit ={saveprofileinfo}>
           
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Full name</label>
            <input 
            name="fullname"
            className="p-2 rounded border border-gray-300"
            value={formvalue.fullname}
            required
            onChange={handleForm}
            />
            </div>
            <div className="grid grid-col gap-2">
            <label className="text-lg font-semibold">Email</label>
            <input 
            disabled
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