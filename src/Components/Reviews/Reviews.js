import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='md:grid grid-cols-3 gap-6 p-6'>
            {
                reviews.map(review => <ReviewCart 
                    key={review.id}
                    review={review}
                />)
            }
        </div>
    );
};

export default Reviews;