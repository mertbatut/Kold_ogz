import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <>
        <div className='HeaderComplate py-8'>
          <div className="HeaderBox flex justify-around">
            <div className='HeaderBrand'>
              <h1>MARUL</h1>
            </div>
            <div className="HeaderTag">
              <ul className='flex gap-16 font-bold text-black]'>
                <a href=""> <li>WORK</li></a>
                <a href=""> <li>MASTER CLASS</li></a>
                <a href=""> <li>PRESETS</li></a>
                <a href=""> <li>CONTACT</li></a>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
