import Layout from "./Layout"

const Contact =()=>{
return(
    <Layout>
    <div className="p-4 md:p-0">
        <header className="md:w-6/12 mx-auto my-16 shadow-lg bg-white border">
            <img src="images/conatct.jpg" alt="" className="w-full" />
            <div className='md:p-8 p-4'>
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
                    <label className="font-semibold text-lg mb-1">Mobile No.</label>
                    <input
                    type="number"
                    name="contact"
                    placeholder="9999999999"
                    className="p-3 border border-gray-300 rounded"
                    required
                    />
                
                </div>
                <div className="flex flex-col relative">
                    <label className="font-semibold text-lg mb-1">Messages</label>
                    <textarea name="messages" id="" rows="3"  className="p-3 border border-gray-300 rounded">

                    </textarea>
                   
                
                </div>
                <button className="p-3 bg-blue-600 text-white rounded font-semibold hover:bg-rose-600">Submit</button>
               
            </form>
            </div>
        </header>
    </div>
    </Layout>
)
}

export default Contact