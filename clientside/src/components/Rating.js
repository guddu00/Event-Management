import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [ratings, setRatings] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/ratings')
            .then((response) => {
                setRatings(response.data);
            })
            .catch((error) => console.error('Error fetching ratings:', error));
    }, []);

    const calculateOverallRating = () => {
        if (ratings.length === 0) return 0;
        const total = ratings.reduce((sum, item) => sum + item.rating, 0);
        return (total / ratings.length).toFixed(1); // 1 decimal place
    };

    const submitRating = async () => {
        if (!name.trim()) {
            alert('Please provide your name!');
            return;
        }
        if (rating === 0) {
            alert('Please select a star rating!');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/ratings', {
                name,
                rating,
                feedback,
            });

            setSuccessMessage('Your rating has been submitted successfully!');
            
            setRating(0);
            setFeedback('');
            setName('');

            const updatedRatings = await axios.get('http://127.0.0.1:8000/api/ratings');
            setRatings(updatedRatings.data);

            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            alert('Failed to submit rating.');
        }
    };

    return (
        <div className="p-6 shadow-xl shadow-indigo-500/50 mx-auto mt-12 space-y-8 bg-tertiary rounded-lg w-[85%] border-2 border-secondary ">
            <h1 className='text-3xl font-bold text-center text-btn-color'>What Our Customers Say</h1>
            
            <div className='flex flex-col items-center justify-evenly lg:flex-row'>
                <div className="flex flex-col items-center justify-center text-center border-4 shadow-2xl shadow-indigo-500/50 border-btn-color rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                    <h2 className="font-bold text-gray-800 md:text-2xl text:xl">Overall Rating</h2>
                    <div className="flex flex-col items-center justify-center mt-2 md:flex-row">
                        <span className="text-3xl font-semibold text-blue-500">
                            {calculateOverallRating()}
                        </span>
                        <span className="flex flex-row ml-2 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className="text-lg"
                                    color={i < Math.round(calculateOverallRating()) ? '#ffc107' : '#e4e5e9'}
                                />
                            ))}
                        </span>

                        <span className="ml-2 text-gray-600">
                            ({ratings.length} reviews)
                        </span>
                    </div>
                </div>
                <div className='w-[70%] lg:w-[50%] border-2 rounded-lg shadow-lg shadow-indigo-500/50 border-secondary px-10 py-5'>
                    <h2 className="mt-6 mb-4 text-xl font-bold text-gray-800">Rate Us</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full p-2 mb-4 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <p className='text-xl'>Select Stars</p>
                    <div className="flex items-center mb-4 ">
                            
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <FaStar
                                    key={index}
                                    className="text-2xl cursor-pointer"
                                    color={starValue <= (hover || rating) ? '#ffc107' : '#cfcfcf'}
                                    onMouseEnter={() => setHover(starValue)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(starValue)}
                                />
                            );
                        })}
                    </div>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Leave a comment (optional)..."
                    ></textarea>
                    <button
                        onClick={submitRating}
                        className="px-4 py-2 mt-4 text-white rounded-lg shadow-lg bg-btn-color shadow-indigo-500/50 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div>
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    Latest Ratings
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {(showAll ? ratings : ratings.slice(0, 3)).map((item) => (
                        <div
                            key={item.id}
                            className="p-4 border-2 rounded-lg shadow-2xl border-secondary shadow-indigo-500/50"
                        >
                            <p className="text-lg font-semibold text-gray-700">
                                {item.name}
                            </p>
                            <div className="flex items-center my-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="text-lg"
                                        color={i < item.rating ? '#ffc107' : '#e4e5e9'}
                                    />
                                ))}
                            </div>
                            {item.feedback && (
                                <p className="mt-2 text-sm text-gray-600">{item.feedback}</p>
                            )}
                            <p className="mt-2 text-sm text-gray-400">
                                {new Date(item.created_at).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                {ratings.length > 4 && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-4 py-2 text-white rounded-lg bg-btn-color hover:bg-blue-700"
                        >
                            {showAll ? 'Show Less' : 'View All'}
                        </button>
                    </div>
                )}
            </div>

            {successMessage && (
                <div className="p-4 text-center text-green-700 bg-green-100 border border-green-300 rounded-lg">
                    {successMessage}
                </div>
            )}


        </div>
    );
};

export default Rating;
