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
                <li key={index}>
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
            className=" bg-blue-600 py-3 px-6 text-md font-semibold rounded text-white block text-center hover:bg-rose-600 w-[100px] hover:text-white" 
            to='/signup'
            >
                Signup
            </Link>
            
        </ul>
            
        </div>

       </nav>
       <div>
        {children}
       </div>

       <footer className="bg-orange-600 p-12">
       <div className="w-10/12 mx-auto grid grid-cols-4">
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
    </div>
   
)
}
export default Layout