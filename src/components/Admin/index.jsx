
const Admin =()=>{
    return(
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <img src="/images/admin.svg" className="w-96 h-96" alt="" />
            <div>
            <h1 className="text-4xl font-semibold mb-4">Admin Console !</h1>
            <form className="flex flex-col gap-4">  
                <input
                type="text"
                className="border p-4 bg-white rounded-md w-[450px]"
                placeholder="Enter Admin Secret"
                required
                />
                <button className="py-3.5 px-5 bg-violet-600 w-fit text-white font-semibold rounded-md">Access Now</button>
            </form>
            </div>
        </div>
    )
}

export default Admin