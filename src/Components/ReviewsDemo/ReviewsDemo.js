import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const ReviewsDemo = () => {
    const [reviews, setReviews] = useReviews();
    const demoReviews = reviews.slice(0,3);
    const navigate = useNavigate();
    return (
        <div className='p-8'>
            <h1 className='text-3xl text-center text-emerald-600 mb-8'>Reader Reviews</h1>
            <div className='md:grid grid-cols-3 gap-6 mb-12'>
                {
                    demoReviews.map(review => <ReviewCart 
                        key={review.id}
                        review={review}
                         />)
                }
            </div>
            <p className='text-center'><button onClick={()=>navigate('/reviews')} className='bg-indigo-400 p-2 rounded-xl text-white hover:bg-teal-600 text-xl'>See all Reviews</button></p>
        </div>
    );
};

export default ReviewsDemo;