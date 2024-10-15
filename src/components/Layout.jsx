import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import firebaseAppConfig from "../util/firebase-config"

const auth = getAuth(firebaseAppConfig)

const Layout=({children})=>{
   const [open,setOpen] = useState(false)
   const [session, setSession] = useState(null)
   const [accountmenu, setAccountmenu] = useState(false)

   const navigate = useNavigate()

   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setSession(user)
        }else{
            setSession(false)
        }
    })
   
   },[])
 
    const menus =[
        {
            label:"Home",
            href:'/',
        },
        {
            label:"Products",
            href:'/products',
        },
        {
            label:"Category",
            href:'/category',
        },
        {
            label:"Contact Us",
            href:'/contact-us',
        }
    ]

    const mobileLink = (href)=>{
        
        navigate(href)
        setOpen(false)
    }

    if(session===null)
        return(
    <div>Loading...</div>
        )

return(
    
    <div>
       <nav className="shadow-lg bg-slate-50 sticky top-0 left-0 z-10">
        <div className="w-10/12 mx-auto flex items-center justify-between">
        <img src='images/logo.jpg'
        className="w-24"
        />
        <button className="md:hidden" onClick ={()=>setOpen(!open)}>
        <i className="ri-menu-3-fill text-3xl"></i>
        </button>
        <ul className="md:flex gap-4 items-center hidden">
            {
            menus.map((list,index)=>(
                <li key={index}>
                <Link to={list.href}
                className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white" 
                >
                {list.label}
                </Link>
                </li>

            ))
            }
            {
                !session && 
                <>
                <Link 
                className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                to='/login'
                >
                    Login
                </Link>
                <Link 
                className=" bg-blue-600 py-3 px-6 text-md font-semibold rounded text-white block text-center hover:bg-rose-600 w-[100px] hover:text-white" 
                to='/signup'
                >
                    Signup
                </Link>
                </>
            }
            {
                session && 
                <button className="relative" onClick={()=>setAccountmenu(!accountmenu)}>
                    <img src="/images/avt.webp" className="w-10 h-10 rounded-full" alt="" />
                    {
                    accountmenu &&
                    <div className="flex flex-col gap-2 items-start w-[150px] py-3 bg-white absolute top-12 right-0 shadow-lg shadow-gray-300">
                     
                     <Link to="/profile" className="w-full text-left p-2 hover:bg-gray-100"><i className="ri-user-line mr-2"></i>My Profile</Link>
                     <Link to="/cart" className="w-full text-left p-2 hover:bg-gray-100"><i className="ri-shopping-cart-line mr-2"></i>Cart</Link>
                   <button className="w-full text-left p-2 hover:bg-gray-100" onClick={()=>signOut(auth)}>
                   <i className="ri-logout-circle-r-line mr-2"></i>
                   Logout
                   </button>
                    
                    </div>
                    }
                    
                </button>
            }
          
            
        </ul>
            
        </div>

       </nav>
       <div>
        {children}
       </div>

       <footer className="bg-orange-600 md:p-12 p-8">
       <div className="md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8 ">
       <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Follow Us</h1>
       <ul className="space-y-2 text-slate-50">
       
        <li><Link to='/'>Facebook</Link></li>
        <li><Link to='/'>Youtube</Link></li>
        <li><Link to='/'>Linkedin</Link></li>
        <li><Link to='/'>Instagram</Link></li>
        <li><Link to='/'>Twiter</Link></li>
       
       </ul>
      
       </div>
       
       <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
       <ul className="space-y-2 text-slate-50">
        {
            menus.map((item,index)=>(

            <li key={index}>
                <Link to={item.href}>
                {item.label}
                </Link>
            </li>

            ))
        }
        <li><Link to='/login'>Login</Link></li>
        <li><Link to ='/signup'>Signup</Link></li>
       </ul>
      
       </div>
       <div className="pr-8">
        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
       <p className="text-justify text-slate-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, Ducimus, neque magni.  </p>
       <img src='images/logo.jpg'
        className="w-24"
        />
      
       </div>

    

    

       <div>
        <h1 className="text-white font-semibold text-2xl mb-3">Conatct us
        </h1>
      <form className="space-y-4">
        <input
        name="fullname"
        className="bg-white w-full rounded p-3"
        placeholder = "Your Name"
        required
        />
        <input
        type="email"
        name="email"
        className="bg-white w-full rounded p-3"
        placeholder = "Enter E-mail"
        required
        />
        <textarea
        required
        name="message"
        className="bg-white w-full rounded p-3"
        placeholder="Message"
        rows={3}
        />
        <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
      </form>
      
       </div>
       

       </div>

       </footer>

      
       <aside className="md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-20 overflow-hidden"
       style={{
        width:(open ? 250:0),
        transition:'0.3s'
       }}
       >
       <div className="flex flex-col p-8 gap-6">
       {
            menus.map((list,index)=>(
              <button onClick={()=>mobileLink(list.href)} key={index} className="text-white">
                {list.label}
              </button>
            )) 
        }    

        {
            session && <p className="text-white">Hi User</p>
        }
        {
            !session && 
            <>
          <button onClick={()=>mobileLink('/login')} className="text-white">
            Login
            </button>
            <button onClick={()=>mobileLink('/signup')}
            className="bg-blue-600 py-3 px-6 text-md font-semibold rounded text-white  hover:bg-rose-600 w-[100px] hover:text-white" 
            >
                Signup
           </button>
           </>
        }
         
       </div>
       </aside>
    </div>
   
)
}
export default Layout