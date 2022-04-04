import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-6xl font-semibold text-cyan-700'>Page Not Found</h1>
            <p className='text-2xl my-4 text-gray-600'>Error Code: <span className='text-green-500'>404</span></p>
            <p className='text-5xl text-rose-700'>What are you Looking For?</p>
        </div>
    );
};

export default NotFound;