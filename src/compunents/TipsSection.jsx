import React from 'react'
import tipsImg1 from '../assets/t1.png'
import tipsImg2 from '../assets/t2.png'
import tipsImg3 from '../assets/t3.png'
import tipsImg4 from '../assets/t4.png'
import MyContainer from './MyContainer'

const TipsSection = () => {
  return (
    <div>
        <div className='text-center text-3xl font-semibold text-white mb-10 w-full mt-10'>
            <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold'>Why Adopt from PawMart?</h1>
        </div>
        <MyContainer>
            <div className='flex flex-col lg:flex-row justify-between gap-6 space-y-5 p-10 lg:p-0'>
                <div className="card w-full lg:w-250 lg:h-88 bg-base-100 card-lg shadow-sm pt-5">
                    <div>
                        <img className='w-20' src={tipsImg1} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Save a Life</h2>
                        <p>By adopting a pet from PawMart, you give an animal a second chance at life and a loving home.</p>
                        
                    </div>
                </div>
            
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg2} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Healthy and Verified Pets</h2>
                        <p>All pets at PawMart are health-checked, vaccinated, and properly cared for, ensuring a safe adoption experience.</p>
                      
                    </div>
            </div>
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg3} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Support Animal Welfare</h2>
                        <p>Your adoption helps PawMart continue rescuing and providing shelter to more animals in need.</p>  
                    </div>
            </div>
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg4} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Lifetime Guidance</h2>
                        <p>PawMart provides guidance and support for pet care, making sure you and your new pet enjoy a happy, healthy life together.</p>
                      
                    </div>
            </div>
        </div>
        </MyContainer>
    </div>
  )
}

export default TipsSection
