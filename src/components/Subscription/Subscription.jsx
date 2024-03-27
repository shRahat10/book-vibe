import React from 'react';
import { BsFillAwardFill } from 'react-icons/bs';
import { FaGem, FaRegLightbulb } from 'react-icons/fa';

const Subscription = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
            <div className='border rounded-xl p-6 shadow-lg bg-blue-100 w-full'>
                <h1 className='text-4xl font-bold text-blue-700 mb-4'>Bookworm Basic <FaRegLightbulb className="inline-block text-3xl text-yellow-500"/></h1>
                <p className='text-lg font-semibold mb-4'>Price: Free</p>
                <p className='text-lg font-semibold mb-4'>Features</p>
                <ul className='list-disc pl-4 text-base'>
                    <li>Free ebooks access.</li>
                    <li>Personalized recommendations.</li>
                    <li>Community event participation.</li>
                    <li>Bi-monthly newsletter.</li>
                    <li>Access to selected audiobooks.</li>
                </ul>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4">Subscribe</button>
            </div>

            <div className='border rounded-xl p-6 shadow-lg bg-yellow-100 w-full'>
                <h1 className='text-4xl font-bold text-yellow-700 mb-4'>Page-Turner Plus <BsFillAwardFill className="inline-block text-3xl text-blue-500"/></h1>
                <p className='text-lg font-semibold mb-4'>Price: $14.99/month</p>
                <p className='text-lg font-semibold mb-4'>Features</p>
                <ul className='list-disc pl-4 text-base'>
                    <li>Unlimited digital books.</li>
                    <li>Priority signed copies.</li>
                    <li>Exclusive author meet-ups.</li>
                    <li>Ad-free reading.</li>
                    <li>Quarterly subscription box.</li>
                </ul>
                <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-4">Subscribe</button>
            </div>

            <div className='border rounded-xl p-6 shadow-lg bg-green-100 w-full'>
                <h1 className='text-4xl font-bold text-green-700 mb-4'>Bibliophile Premium <FaGem className="inline-block text-3xl text-red-500"/></h1>
                <p className='text-lg font-semibold mb-4'>Price: $24.99/month</p>
                <p className='text-lg font-semibold mb-4'>Features</p>
                <ul className='list-disc pl-4 text-base'>
                    <li>All Page-Turner Plus benefits.</li>
                    <li>Personal concierge service.</li>
                    <li>VIP author event access.</li>
                    <li>Complimentary audiobooks.</li>
                    <li>Quarterly curated box.</li>
                </ul>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg mt-4">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscription;
