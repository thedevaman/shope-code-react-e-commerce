import { useState } from "react"
import Layout from "./Layout"
const Order =()=>{

    const [order, setOrders] = useState([
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
            <h1 className="text-xl font-semibold">Orders</h1>
            <div className="mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-rose-600 text-white">
                        <th className="py-4">Order id</th>
                        <th>Coustomer's Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        order.map((item,index)=>(
                            <tr className="text-center" key={index} style={{
                                background:((index+1)%2)===0?'white':'#f1f5f9'
                            }}>
                            <td className="py-4">{item.orderId}</td>
                            <td className="capitalize">{item.coustomerName}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td className="capitalize">{item.product}</td>
                            <td>₹{item.amount.toLocaleString()}</td>
                            <td>{item.date}</td>
                            <td className="capitalize">
                                <select className="border border-gray-200 p-1">
                                    <option value='pending'>Pending</option>
                                    <option value='Dispatched'>Dispatched</option>
                                    <option value='Processing'>Processing</option>
                                    <option value='Returned'>Returned</option>
                                </select>
                            </td>
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
export default Order