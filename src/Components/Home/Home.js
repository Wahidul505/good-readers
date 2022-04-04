import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewsDemo from '../ReviewsDemo/ReviewsDemo';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='md:grid grid-cols-2 gap-8 p-12'>
            <div>
                <h1 className='text-4xl font-semibold font-serif text-red-500 mb-6 leading-snug'>You don't need to be Genius. <br /> You just need to be YourSelf...</h1>
                <p className='text-lg text-gray-500 leading-8'>Steal Like An Artist gives you permission to copy your heroes' work and use it as a springboard to find your own, unique style, all while remembering to have fun, creating the right work environment for your art and letting neither criticism nor praise drive you off track.</p>
                <button onClick={()=>navigate('/home/book-details')} className='bg-indigo-400 p-2 rounded-xl text-white mt-4 hover:bg-teal-600 mb-4'>View Details</button>
            </div>
            <div>
                <img className='rounded' src="https://i.pinimg.com/564x/0b/34/50/0b34500c0bc0f69e01bfb8a338d9c64a.jpg" alt="" />
            </div>
        </div>
        <div>
            <ReviewsDemo />
        </div>
        </>
    );
};

export default Home;