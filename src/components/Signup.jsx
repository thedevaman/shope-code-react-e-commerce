const Signup =()=>{
    return(
        <div className="grid grid-cols-2 h-screen overflow-hidden">
          
            <img src="/images/signup.jpg" className="w-full h-full" alt="" />
          
           <div className="flex flex-col justify-center p-8">
            <h1 className="text-4xl font-bold">New User</h1>
            <p className="text-lg text-gray-600">Welcome to Shop-e-code</p>
            <form className="mt-4 space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold text-lg mb-1">Fullname</label>
                    <input
                    name="fullname"
                    placeholder="Your name"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                </div>
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
                    type="passwrod"
                    name="email"
                    placeholder="***********"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                     <button type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600"><i class="ri-eye-line"></i></button>
                </div>
                <button className="p-3 bg-blue-600 text-white rounded font-semibold hover:bg-rose-600">Signup</button>
               
            </form>
           </div>
        </div>
    )
    }
    export default Signup