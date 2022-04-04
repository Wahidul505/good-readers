import React from 'react';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center p-12 flex flex-col gap-4 font-semibold text-gray-600'>
            <button onClick={()=>navigate(-1)} className='text-4xl'><BsFillArrowLeftSquareFill /></button>
            <img className='mx-auto rounded-lg' src="https://i.pinimg.com/564x/0b/34/50/0b34500c0bc0f69e01bfb8a338d9c64a.jpg" alt="" />
            <h1 className='text-3xl text-teal-700'>Steal Like An Artist</h1>
            <div>
                <p className='text-orange-500'>Writer</p>
                <p>Austin Kleon.</p>
            </div>
            <div>
                <p className='text-orange-500'>Summary</p>
                <p>Steal Like An Artist gives you permission to copy your heroes' work and use it as a springboard to find your own, unique style, all while remembering to have fun, creating the right work environment for your art and letting neither criticism nor praise drive you off track.</p>
            </div>
        </div>
    );
};

export default BookDetails;