import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const shoes = [
//   {
//     id: 101,
//     name: 'Nike Air Max 270',
//     price: 149.99,
//     image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [41, 42, 43],
//   },
//   {
//     id: 102,
//     name: 'Adidas Ultraboost 21',
//     price: 179.99,
//     image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [40, 41, 42, 43],
//   },
//   {
//     id: 103,
//     name: 'Puma RS-X',
//     price: 129.99,
//     image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [39, 40, 41],
//   },
//   {
//     id: 104,
//     name: 'Reebok Classic Leather',
//     price: 99.99,
//     image: 'https://images.unsplash.com/photo-1550334383-fd08e1ebf8be?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [40, 41, 42],
//   },
//   {
//     id: 105,
//     name: 'New Balance 574',
//     price: 119.99,
//     image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [41, 42, 43, 44],
//   },
//   {
//     id: 106,
//     name: 'Asics Gel-Kayano 27',
//     price: 159.99,
//     image: 'https://images.unsplash.com/photo-1598454442120-1e04ebd2fa7c?auto=format&crop=entropy&fit=crop&w=400&q=80',
//     sizes: [39, 40, 41, 42],
//   }
// ];


export default function ShoeCardSlider() {

  const [shipment, setShipment] = useState([]);

useEffect(()=>{
  
  const fetchPreOrder = async () =>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/pre-order`)

      setShipment(response.data)
      
    } catch (error) {
      console.error(error);
    }
   
  }

  fetchPreOrder()

},[])
  return (
    <div className="container mx-auto p-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{ clickable: true }}
        breakpoints={{
          380: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {shipment.map((shoe) => (
          <SwiperSlide key={shoe.id}>
            <Link to={`/productDetails/${shoe.id}`} >
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col ">
              <img 
                src={shoe.images[0]?.url} 
                alt={shoe.images[0]?.altText || shoe.name} 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300" 
              />
              <h2 className="text-xs sm:text-md md:text-lg font-semibold text-white ">{shoe.name}</h2>
              <p className="text-white text-xs sm:text-md md:text-lg font-light">${shoe.price}</p>
              <div className="flex flex-wrap justify-start gap-2 mt-2">
                {shoe.sizes.map((size) => (
                  <span key={size} className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs sm:text-sm md:text-md">{size}</span>
                ))}
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
