import { Link } from "react-router-dom"

const Layout=({children})=>{
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
return(
    
    <div>
       <nav className="shadow-lg bg-slate-50 sticky top-0 left-0">
        <div className="w-10/12 mx-auto flex items-center justify-between">
        <img src='images/logo.jpg'
        className="w-24"
        />
        <ul className="flex gap-4 items-center">
            {
            menus.map((list,index)=>(
                <li key={list.index}>
                <Link to={list.href}
                className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white" 
                >
                {list.label}
                </Link>
                </li>

            ))
            }
            <Link 
            className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
            to='/login'
            >
                Login
            </Link>
            <Link 
            className=" bg-blue-600 py-3 px-6 text-md font-semibold rounded text-white block text-center hover:bg-blue-600 w-[100px] hover:text-white" 
            to='/signup'
            >
                Signup
            </Link>
            
        </ul>
            
        </div>

       </nav>

       <footer className="bg-orange-600 p-12">
       <div className="w-10/12 mx-auto grid grid-cols-3">
       <div>
       <img src='images/logo.jpg'
        className="w-24"
        />
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fugiat. Amet perspiciatis doloribus explicabo ducimus maxime corporis quae consectetur quasi magni aliquid expedita, delectus provident ipsam reprehenderit? Ducimus, neque magni.  </p>
       </div>
       <div>2</div>
       <div>3</div>

       </div>

       </footer>
    </div>
   
)
}
export default Layout