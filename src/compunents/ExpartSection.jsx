import React from 'react'
import MyContainer from './MyContainer';
import eimg1 from '../assets/exp1.avif'
import eimg4 from '../assets/exp4.jpg'
import eimg3 from '../assets/exp3.jpg'

const ExpartSection = () => {
  return (
    <div className='mb-10 mt-10'>
      <div className='text-center text-3xl font-semibold text-white mb-10'>
        <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold'>Meet Our Pet Heroes</h1>
      </div>
      <MyContainer className={'grid grid-cols-1 lg:grid-cols-3  w-full space-y-5 p-6 lg:p-0 gap-5'}>
          <div className="card card-side bg-base-100 shadow-sm w-full lg:w-100 h-50">
          <figure>
            <img className='w-60'
              src={eimg1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr.Alica Snow</h2>
            <p>Winter Dermatology & Paw Care</p>
            <p>3 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>

          <div className="card card-side bg-base-100 shadow-sm w-full lg:w-100  h-50">
          <figure>
            <img className='w-60'
              src={eimg4} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr.Alica Snow</h2>
            <p>Winter Dermatology & Pet Caregivers </p>
            <p>8 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
          <div className="card card-side bg-base-100 shadow-sm w-full lg:w-100  h-50">
          <figure>
            <img className='w-60 '
              src={eimg3} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr.Alica Snow</h2>
            <p>Trainer & Pats Care</p>
            <p>10 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </MyContainer>
      
    </div>
  )
}

export default ExpartSection;
