import React from 'react'
import UnsplashRandomImage from '../Images/MainRandom'
import Header from '../components/Header'
import Brands from '../components/Brands'

export default function Main() {
  return (
    <>
      <div className='MainContent '> 
        <Header/>
        
        <div className='ImageOnText absolute left-1/4 top-1/4'>
          <div className='ImageTextBox'>
            <div className='ImageRowBox'>
              <div className='Text1 flex justify-center text-[80px] font-bold pb-28 animate-slideInFromTop'>MARUL</div>
              <div className='Text2 flex flex-col items-center pt-28'>
                <div>
                  <h3 className=' text-xl font-normal animate-slideInFromTop'>Sam Kolder is a world-renowned filmmaker that inspired a generation of content creators from all around the world</h3>
                </div>
                <div className='flex gap-4 mt-4'>
                  <button className='bg-[#ea6e43] rounded-md text-white border py-4 px-6 font-medium animate-slideInFromTop'>Get in touch</button>
                  <button className=' border py-4 px-6 rounded-md text-white bg-inherit font-medium animate-slideInFromTop'>Master Class</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <UnsplashRandomImage/>
       
      </div>
     
    </>
  )
}
