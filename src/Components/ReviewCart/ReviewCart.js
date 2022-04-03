import React from 'react';

const ReviewCart = ({review}) => {
    const {image, name, reviewDetail, ratings} = review;
    return (
        <div className='text-center p-4 bg-emerald-100 rounded-3xl shadow-xl'>
            <img className='mx-auto rounded-full' src={image} alt="" />
            <p className='text-xl my-2 text-pink-800 font-semibold'>{name}</p>
            <p className='text-gray-700' title={reviewDetail}>{reviewDetail.length < 200 ? reviewDetail : reviewDetail.slice(0,200) + '...' }</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewCart;