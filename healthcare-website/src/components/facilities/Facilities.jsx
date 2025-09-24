import React from 'react'
import './Facilities.css'
import facility1 from '../../assets/images/facility1.jpg'
import facility2 from '../../assets/images/facility2.jpg'

const Facilities = () => {
    return (
        <>
            <h2 className='h2-facilites'>Our Facilites</h2>
            <div className="facilites-container">

                <div className="text-area">

                    <h3 className='h3-facilites'>Clinical facilites are the backbone of <br />modern healthcare system</h3>

                    <div className="btn-facilites">
                        <button>Find Out More</button>
                    </div>
                </div>

                <div className="facilites-img">
                    <img src={facility1} />
                    <img src={facility2} />
                </div>

            </div>
        </>
    )
}

export default Facilities