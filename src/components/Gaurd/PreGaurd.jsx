import { useEffect,useState } from "react"
import firebaseAppConfig from "../../util/firebase-config"
import { getAuth,onAuthStateChanged } from "firebase/auth"
import { Navigate,Outlet } from "react-router-dom"
const auth = getAuth(firebaseAppConfig)
const PreGuard = ()=>{
    const [session,setSession] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setSession(user)
            }else{
                setSession(null)
            }
        })
    },[])
    if(session===null)
    {
        <div>Loading...</div>
    }
    if(session)
    
        return <Navigate to="/"/>

        return <Outlet />
    
}
export default PreGuard