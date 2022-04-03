import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const ReviewsDemo = () => {
    const [reviews, setReviews] = useReviews();
    const demoReviews = reviews.slice(0,3);
    return (
        <div className='p-8'>
            <h1 className='text-3xl text-center text-emerald-600 mb-8'>Reader Reviews</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    demoReviews.map(review => <ReviewCart 
                        key={review.id}
                        review={review}
                         />)
                }
            </div>
        </div>
    );
};

export default ReviewsDemo;