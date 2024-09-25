import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from "./Layout"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
const Home =()=>{
    return(
        <Layout>
        <div>
            <header>
            <Swiper
             navigation={true} 
             pagination={{
                dynamicBullets: true,
              }}
             modules={[Navigation,Pagination]}
             slidesPerView={1} >
      <SwiperSlide><img src="/images/a.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/b.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/c.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/d.png" alt="" /></SwiperSlide>
    
    </Swiper>
            </header>
        </div>
        </Layout>
    )
}
export default Home