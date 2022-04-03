import { FaStar } from 'react-icons/fa';

const ReviewCart = ({ review }) => {
    const { image, name, reviewDetail, ratings } = review;
    let stars;
    if (ratings === 2) {
        stars = <><FaStar /><FaStar /></>
    }
    else if (ratings === 3) {
        stars = <><FaStar /><FaStar /><FaStar /></>
    }
    else if (ratings === 4) {
        stars = <><FaStar /><FaStar /><FaStar /><FaStar /></>
    }
    else if (ratings === 5) {
        stars = <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>
    }
    return (
        <div className='text-center p-4 bg-emerald-100 rounded-3xl shadow-xl'>
            <img className='mx-auto rounded-full' src={image} alt="" />
            <p className='text-xl my-2 text-pink-800 font-semibold'>{name}</p>
            <p className='text-gray-700' title={reviewDetail}>{reviewDetail.length < 200 ? reviewDetail : reviewDetail.slice(0, 200) + '...'}</p>
            <p className='text-pink-600 flex justify-center my-4'>{stars}</p>
        </div>
    );
};

export default ReviewCart;