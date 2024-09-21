import { useState } from "react"
import Layout from "./Layout"
const Coustmer =()=>{

    const [coustmers, setCoustmers] = useState([
        {
            orderId:'hjgjhghj',
            coustomerName:'Demo Singh',
            email:"demo@gmail.com",
            mobile:'1234567890',
            product:'Samsung Mobile',
            amount:'40000',
            date:'12-10-2024 10:15:15 AM',
            status:'Pending'

        },
        {
            orderId:'hjgjhghj',
            coustomerName:'Aman Singh',
            email:"demo@gmail.com",
            mobile:'1234567890',
            product:'Samsung Mobile',
            amount:'40000',
            date:'12-10-2024 10:15:15 AM',
            status:'Pending'

        }
    ]) 

    return (
        <Layout>
        <div className="p-4">
            <h1 className="text-xl font-semibold">Customers</h1>
            <div className="mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-rose-600 text-white text-left">
                        <th className="py-4 px-2">Customer's Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        coustmers.map((item,index)=>(
                            <tr className="" key={index} style={{
                                background:((index+1)%2)===0?'white':'#f1f5f9'
                            }}>
                            <td className="capitalize p-4">
                                <div className="flex gap-3">
                                 <img src="/images/avt.webp" className="w-10 h-10 rounded-full"/>
                                
                                <div className="flex flex-col justify-center">
                                <span className="font-semibold">{item.coustomerName}</span>
                                <small className="text-gray-500">{item.date}</small>
                                </div>
                                </div>
                                </td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.date}</td>
                        </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        </Layout>
    )

}
export default Coustmer