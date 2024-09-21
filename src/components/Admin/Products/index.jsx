import { useState } from 'react'
import Layout from '../Layout'
const Product = ()=>{

    const [products,setProducts] = useState([
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/a.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/b.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/c.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/d.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/e.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/f.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/g.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/h.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/i.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/j.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/k.jpg'

        },
        {
            title:'men`s shirt slim blue',
            price:400,
            discount:20,
            description:'this is best shirt available in online market',
            images:'/products/l.jpg'

        },











    ])

    return(
        <Layout>
        <div className=''>
        <h1 className="text-xl font-semibold p-4">Products</h1>
        <div className="grid grid-cols-4 gap-8 p-4">
            {
                products.map((productlist,index)=>(
                 <div key={index} className='bg-white shadow-lg rounded-md'>
                    <img 
                    src={productlist.images} alt=""
                    className="rounded-t-md h-[250px] w-full object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-md capitalize font-semibold">{productlist.title}</h1>
                        <p className="text-gray-500">{productlist.description.slice(0,50)}</p>
                        <div className="flex gap-2">
                            <p>Rs.{productlist.price-(productlist.price*productlist.discount)/100}</p>
                            <del>Rs.{productlist.price}</del>
                            <label className="text-gray-600">({productlist.discount}% off)</label>
                        </div>
                    </div>
                  </div>  

                ))
            }
        </div>
        </div>
        </Layout>
    )

}
export default Product