import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const shoes = [
  {
    id: 101,
    name: 'Nike Air Max 270',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Experience ultimate comfort and iconic style with the Nike Air Max 270.',
  },
  {
    id: 102,
    name: 'Adidas Ultraboost 21',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Boost your run with the Adidas Ultraboost 21, designed for responsive energy return.',
  },
  {
    id: 103,
    name: 'Puma RS-X',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1603808033192-7e80c5e3c4a9?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Retro design meets modern performance with the Puma RS-X sneakers.',
  },
  {
    id: 104,
    name: 'Reebok Classic Leather',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1550334383-fd08e1ebf8be?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Timeless style with the Reebok Classic Leather sneakers.',
  },
  {
    id: 105,
    name: 'New Balance 574',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Iconic New Balance 574 with superior comfort and durability.',
  },
  {
    id: 106,
    name: 'Asics Gel-Kayano 27',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1598454442120-1e04ebd2fa7c?auto=format&crop=entropy&fit=crop&w=400&q=80',
    description: 'Advanced cushioning and stability with Asics Gel-Kayano 27.',
  }
];

export default function CollectionSec() {
  return (
    <div className="container mx-auto p-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {shoes.map((shoe) => (
          <SwiperSlide key={shoe.id}>
            <div className="bg-gray-800 rounded-xl  shadow-lg p-4">
              <img src={shoe.image} alt={shoe.name} className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300" />
              <h2 className="text-xl font-semibold text-gray-800">{shoe.name}</h2>
              <p className="text-gray-300 h-10 text-sm mb-2">{shoe.description}</p>
              <p className="text-white text-lg font-bold">${shoe.price}</p>
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
