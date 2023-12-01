import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';


// import required modules
import { Navigation, Pagination, Zoom } from 'swiper/modules';


const CategorySlide = () => {
    return (
        <section className='mb-6'>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper bg-slate-400 h-[500px]"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/6XQ69tc/canon-g21.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/8XDbXX9/google-p-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/vHPdZSF/google-pixlebook.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/fkhmXzR/mac-Book-air.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/8XDbXX9/google-p-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/fkhmXzR/mac-Book-air.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/vHPdZSF/google-pixlebook.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/Jj895zZ/intil-mini-pc.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://i.ibb.co/6XQ69tc/canon-g21.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default CategorySlide;