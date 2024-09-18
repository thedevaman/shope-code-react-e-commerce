import { useState } from "react"

const Admin =()=>{
    const [size,setSize] = useState(280)
    const [accountmenu,setAccountmenu] = useState(false) 
return (
    <div>
        <aside className="bg-indigo-300 fixed top-0 left-0 h-full" style={{
            width:size,
            transition:'0.3s'
        }}></aside>
        <section className="bg-indigo-50 h-screen"
        style={
            {
                marginLeft:size,
                transition:'0.3s'
            }
        }
        >
        <nav className="bg-white p-6 shadow flex items-center justify-between">
        <div className="flex gap-4 items-center">
        <button className="bg-gray-50 hover:bg-indigo-300 hover:text-white w-8 h-8 rounded"
        onClick={()=>setSize(size==0?280:0)}>
        <i className="ri-menu-5-line text-2xl"></i>
        </button>
        <h1 className="text-md font-semibold">Shop-e-code</h1>
        </div>
        <div>
            <button className="relative">
                <img src="./images/avt.webp" className="w-10 h-10 rounded-full"
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
        </section>
    </div>
)
}
export default Admin