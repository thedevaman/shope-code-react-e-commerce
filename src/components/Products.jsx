import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from "./Layout"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
const Products =()=>{
    const [products,setProducts] = useState([
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/a.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/b.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/c.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/d.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/e.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/f.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/g.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/h.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/i.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/j.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/k.jpg'
        },
        {
            title:'blue shirt',
            price:1200,
            discount:15,
            thumbnail:'/products/l.jpg'
        },
    ])
    return(
        <Layout>
        <div>
          
           
           <div className='md:p-16 p-8'>
               <h1 className='text-3xl font-bold text-center'>All Product</h1>
               <p className='mx-auto text-gray-600 md:w-7/12 text-center mt-2 mb-16 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
               <div className='md:w-10/12 mx-auto grid md:grid-cols-3 gap-12'>
               {
               products.map((item,index)=>(
               <div key={index} className='bg-white shadow-lg border' >
                  <img src={item.thumbnail} />
                  <div className='p-4'>
                     <h1 className='text-lg font-semibold'>{item.title}</h1>
                     <div className='space-x-2'>
                        <label className='font-bold text-lg'>Rs {item.price-(item.price*item.discount)/100}</label>
                        <del>Rs {item.price}</del>
                        <label className='text-gray-600'>({item.discount}%)</label>
                     </div>
                     <button className='bg-blue-500 py-2 w-full rounded text-white font-semibold mt-4'>Buy Now</button>
                     <button className='bg-green-500 py-2 w-full rounded text-white font-semibold mt-2'><i className="ri-shopping-cart-line mr-2"></i>Cart</button>
                  </div>
               </div>
               ))
               }
               </div>
           </div>

        </div>
        </Layout>
    )
}
export default Products