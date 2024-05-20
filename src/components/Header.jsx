import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <>
      <div>
        <div className='HeaderComplate py-8 absolute inset-x-1/4'>
          <div className="HeaderBox flex justify-between ">
            <div className='HeaderBrand'>
              <h1 className='font-bold'>MARUL</h1>
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
        </div>
      </>
    )
  }
}
