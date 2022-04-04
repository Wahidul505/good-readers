import React from 'react';
import {FiInstagram} from 'react-icons/fi'
import {FaPinterestSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const About = () => {
    return (
        <div className='p-12 text-gray-700'>
            <img className='w-96 rounded-lg mb-6' src="https://media.istockphoto.com/photos/friends-who-read-together-stays-together-picture-id1295149999?b=1&k=20&m=1295149999&s=170667a&w=0&h=2QnTCyHGyt7lEMAREG4wOgG4dcIrCZWmYd1KLUmI5ng=" alt="" />
            <h1 className='text-3xl text-teal-700 mb-2'>KNOW ABOUT US</h1>
            <p>This website is an open review platform for readers. Here we allow readers to read a book once a week for free and let people give reviews over the book. This week we gave "Steal Like An Artist". The next week we will give "Anything You Want" by Derek Sivers. We will highly recommend You to read the previous one before you want to read the next one.</p>
            <img className='w-96 rounded-lg my-6' src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <h2 className='text-center text-2xl text-teal-500 mt-6'>Join Us</h2>
            <hr className='mb-4 border-t-2'/>
            <div className='flex justify-center gap-6 text-5xl'>
                <a target='_blank' href="https://www.goodreads.com/"><FiInstagram /></a>
                <a target='_blank' href="https://www.rokomari.com/book"><FaPinterestSquare /></a>
                <a target='_blank' href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155"><FaTwitterSquare /></a>
            </div>


        </div>
    );
};

export default About;