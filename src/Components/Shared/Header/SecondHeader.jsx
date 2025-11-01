import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ThirdHeader from './ThirdHeader';

const SecondHeader = () => {
    return (
        <>
        <div className='flex justify-between items-center container mx-auto px-6 p-1'>
            <div className='border bg-[#3BB77E] hover:bg-[#29A56C] w-70 transition-transform hover:scale-105 cursor-pointer text-center text-lg text-[#FFFFFF] font-semibold rounded-md mt-2'>
                 <select className="p-2  rounded-l-md focus:outline-none">
                        <option value="all">Browse All Categories</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="snacks">Snacks</option>
                    </select>
            </div>
            <div className='flex items-center gap-10 '>
                <div className='flex items-center gap-1 transition-transform hover:scale-110 cursor-pointer'>
                    <img src="/assets/icon-hot.png" alt="" />
                    <p>Deals</p>
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Home</p>
                    <MdArrowDropDown />
                </div>
                    <p className='transition-transform hover:scale-110 cursor-pointer'>About</p>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Shop</p>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Vendors</p>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Mega menu</p>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Blog</p>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <p>Pages </p>
                    <MdArrowDropDown />
                </div>
                <p className='transition-transform hover:scale-110 cursor-pointer'>Contact</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img src="/assets/icon-headphone.png" alt="" />
                <div>
                    <h2 className='text-[#3BB77E] font-bold text-2xl'>1900 - 888</h2>
                    <p className='text-gray-400 text-xs'>24/7 Support Center</p>
                </div>
            </div>
        </div>
        <div className='border border-gray-100 mt-2'></div>
        <ThirdHeader></ThirdHeader>
        </>
    );
};

export default SecondHeader;