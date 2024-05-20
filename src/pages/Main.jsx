import React from 'react'
import UnsplashRandomImage from '../Image/MainRandom'
import Header from '../components/Header'

export default function Main() {
  return (
    <>
    <div className='MainContent'> 
    <Header/>
        
        <div className='ImageOnText'>
            <div className='ImageTextBox'>
                <div className='ImageRowBox'>
                    <div className='Text1'></div>
                    <div className='Text2'>
                        <div>
                            <h3>Sam Kolder is a world-renowned filmmaker that inspired a generation of content creators from all around the world</h3>
                        </div>
                        <div><button>Get in touch</button></div>
                        <div><button>Master Class</button></div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <UnsplashRandomImage/>
    </div>

        
   
    </>
  )
}
