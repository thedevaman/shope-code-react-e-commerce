import { useState } from "react"
import {Link,useLocation} from 'react-router-dom'

const Layout =({children})=>{
    const [size,setSize] = useState(280)
    const [mobilesize,setMobileSize] = useState(0)
    const [accountmenu,setAccountmenu] = useState(false) 
    const location = useLocation();

    const menus =[
        {
            label:'Dashboard',
            icon:<i className="ri-dashboard-2-line mr-2"></i>,
            link:'/admin/dashboard'
        },
        {
            label:'Products',
            icon:<i className="ri-shopping-cart-fill mr-2"></i>,
            link:'/admin/products'
        },
        {
        label:'Orders',
        icon:<i className="ri-shape-line mr-2"></i>,
        link:'/admin/orders'
        },
        {
        label:'Payments',
        icon:<i className="ri-money-rupee-circle-fill mr-2"></i>,
        link:'/admin/payments'
        },
        {
        label:'Setting',
        icon:<i className="ri-tools-line mr-2"></i>,
        link:'/admin/settings'
        },
        {
        label:'Logout',
        icon:<i className="ri-logout-box-r-line mr-2"></i>,
        link:'/admin/logout'
        },
        
    ]

return (
   <>
   {/* Desktop view */}
    <div className="md:block hidden">
        <aside className="bg-indigo-300 fixed top-0 left-0 h-full overflow-hidden" style={{
            width:size,
            transition:'0.3s'
        }}>
         
        <div className="flex flex-col gap-2 p-2">
            
        {
            menus.map((menulist, index)=>(
                <Link to={menulist.link} key={index} className="border-2 rounded px-4 py-2 font-semibold text-gray-700 text-[17.5px] hover:bg-indigo-50 hover:rounded hover:shadow hover:duration-500 hover:border-indigo-50"
                style={{
                    background:(location.pathname === menulist.link)?'#EEF2FF':'transparent'
                }}
                >{menulist.icon}{menulist.label}</Link>
            ))
        }
        </div>
        </aside>
        <section className="bg-indigo-50 h-screen"
        style={
            {
                marginLeft:size,
                transition:'0.3s'
            }
        }
        >
        <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
        <div className="flex gap-4 items-center">
        <button className="bg-gray-50 hover:bg-indigo-300 hover:text-white w-8 h-8 rounded"
        onClick={()=>setSize(size==0?280:0)}>
        <i className="ri-menu-5-line text-2xl"></i>
        </button>
        <h1 className="text-md font-semibold">Shop-e-code</h1>
        </div>
        <div>
            <button className="relative">
                <img src="/images/avt.webp" className="w-10 h-10 rounded-full border"
                 onClick={()=>setAccountmenu(!accountmenu)}
                />
                {
                accountmenu &&
                <div className="absolute top-18 right-0 bg-white w-[200px] shadow-lg p-6">
                      <div>
                        <h1 className="text-lg font-semibold">Hi,Admin</h1>
                        <p className="text-gray-500">admin@gmail.com</p>
                        <div className="h-px bg-gray-200 my-4"/>
                        <button>
                        <i className="ri-logout-circle-r-line mr-2"></i> Logout
                        </button>
                      </div>                
                </div>
                 }
            </button>
        </div>
        </nav>
        <div>
            {children}
        </div>
        </section>
    </div>

     {/* Mobie view */}
    <div className="md:hidden block">
        <aside className="bg-indigo-300 fixed top-0 left-0 h-full z-50 overflow-hidden" style={{
            width:mobilesize,
            transition:'0.3s',
        }}>
         
        <div className="flex flex-col gap-2 p-2">
        <button 
        className="text-right text-gray-700 text-2xl font-semibold"
        onClick={()=>setMobileSize(mobilesize==0?280:0)}>
      <i className="ri-close-circle-line"></i>
        </button>
            
        {
            menus.map((menulist, index)=>(
                <Link to={menulist.link} key={index} className="border-2 rounded px-4 py-2 font-semibold text-gray-700 text-[17.5px] hover:bg-indigo-50 hover:rounded hover:shadow hover:duration-500 hover:border-indigo-50"
                style={{
                    background:(location.pathname === menulist.link)?'#EEF2FF':'transparent'
                }}
                >{menulist.icon}{menulist.label}</Link>
            ))
        }
        </div>
        </aside>
        <section className="bg-indigo-50 h-screen"
       
        >
        <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
        <div className="flex gap-4 items-center">
        <button className="bg-gray-50 hover:bg-indigo-300 hover:text-white w-8 h-8 rounded"
        onClick={()=>setMobileSize(mobilesize==0?280:0)}>
        <i className="ri-menu-5-line text-2xl"></i>
        </button>
        <h1 className="text-md font-semibold">Shop-e-code</h1>
        </div>
        <div>
            <button className="relative">
                <img src="/images/avt.webp" className="w-10 h-10 rounded-full border"
                 onClick={()=>setAccountmenu(!accountmenu)}
                />
                {
                accountmenu &&
                <div className="absolute top-18 right-0 bg-white w-[200px] shadow-lg p-6">
                      <div>
                        <h1 className="text-lg font-semibold">Hi,Admin</h1>
                        <p className="text-gray-500">admin@gmail.com</p>
                        <div className="h-px bg-gray-200 my-4"/>
                        <button>
                        <i className="ri-logout-circle-r-line mr-2"></i> Logout
                        </button>
                      </div>                
                </div>
                 }
            </button>
        </div>
        </nav>
        <div>
            {children}
        </div>
        </section>
    </div>
   </>
)
}
export default Layout